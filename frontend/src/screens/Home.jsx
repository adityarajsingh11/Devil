import React, {useContext , useState,useEffect} from 'react'
import { UserContext } from '../context/user.context'
import axios from "../config/axios"
import { useNavigate } from 'react-router-dom'

function Home() {
    const {user} = useContext(UserContext);
    const [isModalOpen , setIsModalOpen] = useState(false);
    const [projectName , setProjectName] = useState(null);
    const [project , setProject] = useState([])

    const navigate = useNavigate()

    function createproject(e){
      e.preventDefault()
      console.log({projectName})

      axios.post('/projects/create',{
        name:projectName
      }).then((res) => {
        console.log(res)
        setIsModalOpen(false)

      })
      .catch((error) => {
        console.log(error)
      })

    }

    useEffect(() => {
      axios.get('/projects/all').then((res) => {
        // console.log(res.data)
        setProject(res.data.projects)
      }).catch(err => {
        console.log(err)
      })
    },[])


  return (
    <main className="p-4">
      <div className="projects flex flex-wrap gap-3">
        <button
          className="project p-4 border border-slate-300 rounded-md inline-flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <i className="ri-link" /> New project
        </button>

                {
                    project.map((project) => (
                        <div key={project._id}
                           onClick={() => {
                                navigate(`/project`, {
                                    state: { project }
                                })
                            }}
                            
                            className="project flex flex-col gap-2 cursor-pointer p-4 border border-slate-300 rounded-md min-w-52 hover:bg-slate-200">
                            <h2
                                className='font-semibold'
                            >{project.name}</h2>


                            <div className="flex gap-2">
                                <p> <small> <i className="ri-user-line"></i> Collaborators</small> :</p>
                                {project.users.length}
                            </div>

                            

                        </div>
                    ))
                }
      </div>

      <div></div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
            <header className="px-6 py-4 border-b">
              <h2 className="text-lg font-semibold">Create Project</h2>
            </header>

            <form
              className="p-6"
              onSubmit={createproject}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project name
              </label>
              <input
                onChange={(e) => setProjectName(e.target.value)}
                value={projectName}
                name="projectName"
                type="text"
                required
                placeholder="Enter project name"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home