import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const getusers = new User()

    Object.assign(getusers, {
      name: name,
      email: email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.users.push(getusers)

    return getusers
  }

  findById(id: string): User | undefined {
    const findbyid = this.users.find((repository) => repository.id === id)
    return findbyid
  }

  findByEmail(email: string): User | undefined {
    const findbyemail = this.users.find((repository) => repository.email === email)
    return findbyemail
  }

  turnAdmin(receivedUser: User): User {
      Object.assign(receivedUser, {
        admin: true,
        updated_at: new Date()
      })

      return receivedUser
  }

  list(): User[] {
    const list = this.users
    return list
  }
}

export { UsersRepository };
