import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const findbyid = this.usersRepository.findById(user_id)

    if (!findbyid.admin) {
      throw new Error("User does not exists")
    }

    return this.usersRepository.list()

  }
}

export { ListAllUsersUseCase };
