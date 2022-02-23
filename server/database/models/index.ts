import UserModel, { User } from "./User"
import TaskModel, { Task } from "./Task"

export { User }
export { Task }

const Models = (sequelize: any) => {
  const User = UserModel(sequelize)
  const Task = TaskModel(sequelize)

  return {
    User,
    Task,
  }
}

export default Models
