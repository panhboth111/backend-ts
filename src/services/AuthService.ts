import { Service, Inject } from "typedi";
import { jwtSecret } from "../utilities/configs";
import { IUser, ICredentials, ICover, IProfile } from "../types/model";
import { Model, Document, startSession } from "mongoose";
import { Request } from "express";
import bcrypt from "bcrypt";
import { IMessage } from "../types/serviceMessage";
import "reflect-metadata";
import { reg, Devreg } from "../utilities/regs";
import jwt from "jsonwebtoken";
@Service()
export default class AuthService {
  constructor(
    @Inject("userModel") private userModel: Model<IUser & Document>,
    @Inject("credentialModel")
    private credentialModel: Model<ICredentials & Document>,
    @Inject("coverModel") private coverModel: Model<ICover & Document>,
    @Inject("profileModel") private profileModel: Model<IProfile & Document>
  ) {}
  async signUp(request: Request): Promise<IMessage> {
    return new Promise(async resolve => {
      const { email, name, pwd } = request.body;
      let role = "";
      if (reg.test(email)) role = "Student";
      else if (Devreg.test(email)) role = "Device";
      else
        return resolve({
          message: "Only KIT email is allowed",
          code: "SU-001",
          success: false,
          data: ""
        });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(pwd, salt, async (err, hashedPassword) => {
          if (err)
            return resolve({
              success: false,
              code: "",
              data: "",
              message: err.message
            });
          const session = await startSession();
          session.startTransaction();
          try {
            const u: IUser = { email, name, role };
            const c: ICredentials = { email, pwd: hashedPassword };
            const newUser = await this.userModel.create(u);
            await this.credentialModel.create(c);
            await this.profileModel.create({ email });
            await this.coverModel.create({ email });
            await session.commitTransaction();
            return resolve({
              success: true,
              message: "Account registered successfully",
              code: "",
              data: newUser
            });
          } catch (error) {
            resolve({
              success: false,
              message: error.message,
              code: "",
              data: ""
            });
            await session.abortTransaction();
          } finally {
            session.endSession();
          }
        });
      });
    });
  }
  async signIn(email: string, pwd: string): Promise<IMessage> {
    return new Promise(async resolve => {
      try {
        const userExists = await this.credentialModel.findOne({ email });
        if (!userExists)
          return resolve({
            success: false,
            message: "Email does not match with any user",
            code: "",
            data: ""
          });
        bcrypt.compare(pwd, userExists.pwd, async (err, matches) => {
          if (err)
            return resolve({
              success: false,
              message: err.message,
              code: "",
              data: ""
            });
          if (!matches)
            return resolve({
              success: false,
              message: "Incorrect password",
              code: "",
              data: ""
            });
          const user = await this.userModel.findOne({ email });
          const token = jwt.sign(
            { email, name: user?.name, role: user?.role },
            jwtSecret
          );
          return resolve({
            success: true,
            message: "Signed in successfully",
            code: "",
            data: token
          });
        });
      } catch (error) {
        return resolve({
          success: false,
          message: error.message,
          code: "",
          data: ""
        });
      }
    });
  }
  async validateUser(email: string) {
    const user = await this.userModel.findOne({ email });
    return user ? true : false;
  }
}
