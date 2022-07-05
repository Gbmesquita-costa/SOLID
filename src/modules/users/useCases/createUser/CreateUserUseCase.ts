import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
      const useralreadyexists = this.usersRepository.findByEmail(email)

      if (useralreadyexists) {
        throw new Error("User already exists")
      }

      return this.usersRepository.create({
        email: email,
        name: name
      })
  }
}

export { CreateUserUseCase };
