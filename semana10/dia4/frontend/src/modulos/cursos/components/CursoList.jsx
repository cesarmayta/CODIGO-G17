import {useState,useEffect} from 'react';
import CursoCard from './CursoCard';
import axios from 'axios';


const CursoList = () => {
    const [listadoCursos,setListadoCursos] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8000/curso')
        .then(res=>{
            console.log(res.data)
            setListadoCursos(res.data)
        })
    },[])

    return (
        <div className="lg:w-4/5">

                    <div className="md:flex justify-between items-center mb-5">
                        <div>
                            <h2> Web Development Courses </h2>
                            <p className=" uk-visible@m"> choose from +10.000 courses with new
                                additions published every months </p>
                        </div>
                        <div className="flex">

                            <div
                                className="bg-white border border-gray-300 divide-gray-300 divide-x flex mr-3 rounded-md align-self-center">
                                <a href="courses.html" className="px-4 py-2 text-lg text-gray-600"
                                    data-tippy-placement="top" title="Course list">
                                    <i className="icon-feather-grid"></i></a>
                                <a href="courses-list.html" className="px-4 py-2 text-lg text-gray-400"
                                    data-tippy-placement="top" title="Course Grid">
                                    <i className="icon-feather-list"></i></a>
                            </div>
                            <div className="w-40">
                                <select className="selectpicker ml-3" data-size="7">
                                    <option value=""> Newest </option>
                                    <option value="1">Popular</option>
                                    <option value="2">Free</option>
                                    <option value="3">Premium</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                        {
                            listadoCursos.map((objCurso)=>{
                                return <CursoCard objCurso={objCurso}/>
                            })
                        }
                    </div>


                    <ul className="uk-pagination uk-flex-center uk-margin-medium">
                        <li className="uk-active">
                            <span>1</span>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">5</a>
                        </li>
                        <li>
                            <a href="#"><i className="icon-feather-chevron-right uk-margin-small-top"></i></a>
                        </li>
                        <li>
                            <a href="#">12</a>
                        </li>
                    </ul>

                </div>
    )
}

export default CursoList;