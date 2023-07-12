import { Task } from "../models/Task.js";

export async function createTask(req, res) {
  try {
    const { name, done, projectId } = req.body;
    const newTask = await Task.create({
      projectId,
      name,
      done,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "projectId", "name", "done"],
      order: [["id", "DESC"]],
    });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTask(req, res) {
  const {id} = req.params
  try{
    const task = await Task.findOne({
      where:{id},
    })

  }catch(error){
    return res.status(500).json({message: error.message})
  }

}

export async function deleteTask(req, res){
  try {
    const {id} = req.params
    const result = Task.destroy({
      where : { id },
    })
  return res.status(204)
  } catch (error) {
    return res.status(500).json({message: error.message})
    
  }
  
}

export async function updateTask(req, res){
  try {
    const {id} = req.params
    const task = Task.findOne({
      where:{id},
    })
    task.set(req.body)
    await task.save()
    return res.json(task)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
 
}