import { useState, useEffect, useContext } from "react"
import axios from 'axios';
import { DataContext } from '../../../context/dataContext';

export const Detalles = () => {
    const [objCurso, setObjCurso] = useState({})

    const { cursoId } = useContext(DataContext)
    console.log(cursoId)

    useEffect(() => {
        axios.get('http://localhost:5000/curso/'+ cursoId)
            .then(res => {
                console.log(res.data.content)
                setObjCurso(res.data.content)
            })
    })

    return (
        <>
            <div class="py-16 bg-center bg-cover bg-no-repeat" data-src="assets/images/course/course-prev.jpg"
                style={{ backgroundBlendMode: "color-burn", backgroundColor: "rgb(23 23 23 / 25%)" }} uk-img>
                <div class="uk-container">

                    <div class="flex lg:flex-row flex-col gap-x-12">
                        <div class="lg:w-4/12 flex-shrink-0">

                            <div
                                class="bg-white overflow-hidden rounded-lg shadow-xl transform hover:scale-105 duration-150">
                                <div class="relative w-full h-64">
                                    <a href="#trailer-modal" uk-toggle>
                                        <img src="assets/images/icon-play.svg" alt=""
                                            class="absolute h-16 object-cover w-16 z-10"
                                            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                                        <img src="assets/images/course/course-prev.jpg" alt=""
                                            class="w-full h-full absolute object-cover" />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div class="lg:w-8/12 text-white relative lg:mt-0 mt-12">
                            <h5 class="text-white"> {objCurso.titulo} </h5>
                            <h1 class="text-white leading-10">{objCurso.descripcion}</h1>
                            <p class="text-lg"></p>

                            <ul class="flex text-gray-300 gap-4">
                                <li class="flex items-center">
                                    <span class="avg bg-orange-400 mr-2 px-2 rounded text-white font-bold"> 4.9 </span>
                                    <div class="star-rating">
                                        <span class="star"></span><span class="star"></span>
                                        <span class="star"></span><span class="star">
                                        </span><span class="star"></span>
                                    </div>
                                </li>
                                <li> <i class="icon-feather-users"></i> 1200 alumnos </li>
                            </ul>
                            <ul class="flex text-gray-300">
                                <li> Creado por <a href="#" class="text-white fond-bold"> {objCurso.instructor} </a> </li>
                                <span class="middot mx-3 text-2xl">·</span>
                                <li> version 2022</li>
                            </ul>

                            <div class="flex gap-x-4 absolute -mt-12 w-1/3 right-0">
                                <a href="#"
                                    class="bg-red-200 flex flex-none h-10 inline-block items-center justify-center rounded-full text-center text-orange-600 w-10"
                                    data-tippy-placement="left" title="Add to Cart" data-tippy-theme="light"> <i
                                        class="uil-shopping-basket"></i> </a>
                                <a href="#"
                                    class="bg-green-500 font-bold inline-block py-1 rounded-md flex items-center justify-center text-white w-full hover:text-white">
                                    Iniciar Curso </a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div class="bg-white shadow w-full course-tab" uk-sticky="offset: 75 ; media: @m ; bottom : true">
                <div class="max-w-3xl m-auto px-4">
                    <ul class="uk-child-width-expand uk-tab m-0"
                        uk-switcher="connect: #course-intro-tab ;animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">
                        <li><a href="#"><i class="uil-file-blank icon-mobi"></i> <span> Sesiones </span></a></li>
                        <li><a href="#"> <i class="uil-play-circle icon-mobi"></i> <span> Objetivos</span></a></li>
                        <li><a href="#"> <i class="uil-comment-message icon-mobi"></i> <span> FAQ</span></a></li>
                        <li><a href="#"> <i class="uil-comment-alt-exclamation icon-mobi"></i> <span>
                            Anuncios</span></a></li>
                        <li><a href="#"> <i class="uil-star icon-mobi"></i> <span> Comentarios</span></a></li>
                    </ul>
                </div>
            </div>

            <div class="max-w-3xl m-auto py-10 px-4">

                <ul id="course-intro-tab" class="uk-switcher mt-4">
                    <li>

                        <h3 class="mb-4"> Sesiones </h3>
                        <ul uk-accordion>
                            <li class="bg-white px-6 py-4 rounded shadow hover:shadow-md uk-open">
                                {objCurso.modulos && objCurso.modulos.map((modulo) => {
                                    return (
                                        <>
                                            <a class="uk-accordion-title text-md" href="#"> {modulo.nombre} </a>
                                            <div class="uk-accordion-content mt-3 -mx-6">
                                                <ul class="course-curriculum-list font-semibold">
                                                    {
                                                        modulo.sesiones.map((sesion) => {
                                                            return (
                                                                <>
                                                                    <li class="hover:bg-gray-200 px-6 py-2 flex">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                                            class="w-6 mr-2">
                                                                            <path fill-rule="evenodd"
                                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                                clip-rule="evenodd" />
                                                                        </svg> {sesion.nombre} <span class="text-sm ml-auto"> {sesion.duracion} min </span>
                                                                    </li>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </ul>

                                            </div>
                                        </>
                                    )
                                })}

                            </li>

                        </ul>

                        <div id="trailer-modal" uk-modal>
                            <div class="uk-modal-dialog">
                                <button class="uk-modal-close-default mt-2  mr-1" type="button" uk-close></button>
                                <div class="uk-modal-header">
                                    <h4> Trailer video </h4>
                                </div>
                                <div class="w-full">
                                    <iframe src={objCurso.video} class="w-full"
                                        uk-video="automute: true" frameborder="0" allowfullscreen uk-responsive></iframe>
                                </div>

                                <div class="uk-modal-body">
                                    <h3>Build Responsive Websites </h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore
                                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident,
                                        sunt
                                        in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>

                    </li>

                    <li>

                        <div class="space-y-6">
                            <div>
                                <h3> Description </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut
                                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore magna
                                    aliquam erat
                                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                    lobortis
                                    nisl ut aliquip ex ea commodo consequat
                                </p>
                            </div>
                            <div>
                                <h3> What You’ll Learn </h3>
                                <ul class="grid md:grid-cols-2">
                                    <li> <i class="uil-check text-xl font-bold mr-2"></i>Setting up the environment</li>
                                    <li> <i class="uil-check text-xl font-bold mr-2"></i>Advanced HTML Practices</li>
                                    <li> <i class="uil-check text-xl font-bold mr-2"></i>Build a portfolio website</li>
                                    <li> <i class="uil-check text-xl font-bold mr-2"></i>Responsive Designs</li>
                                    <li> <i class="uil-check text-xl font-bold mr-2"></i>Understand HTML Programming</li>
                                    <li> <i class="uil-check text-xl font-bold mr-2"></i>Code HTML</li>
                                    <li> <i class="uil-check text-xl font-bold mr-2"></i>Start building beautiful websites
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3> Requirements</h3>
                                <ul class="list-disc ml-5">
                                    <li>Any computer will work: Windows, macOS or Linux</li>
                                    <li>Basic programming HTML and CSS.</li>
                                    <li>Basic/Minimal understanding of JavaScript</li>
                                </ul>
                            </div>
                            <div>
                                <h3> Here is exactly what we cover in this course: </h3>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim laoreet
                                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                    tation
                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
                                <p> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                    quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                    consequat.
                                    Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod
                                    mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing
                                    elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut
                                    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                    ut
                                    aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                    </li>

                    <li>

                        <h3 class="mb-4"> Course Faq </h3>
                        <ul uk-accordion>
                            <li class="bg-white px-6 py-4 rounded shadow hover:shadow-md uk-open">
                                <a class="uk-accordion-title" href="#"> Html Introduction </a>
                                <div class="uk-accordion-content mt-3">
                                    <p> The primary goal of this quick start guide is to introduce you to
                                        Unreal
                                        Engine 4`s (UE4) development environment. By the end of this guide,
                                        you`ll
                                        know how to set up and develop C++ Projects in UE4. This guide shows
                                        you
                                        how
                                        to create a new Unreal Engine project, add a new C++ class to it,
                                        compile
                                        the project, and add an instance of a new class to your level. By
                                        the
                                        time
                                        you reach the end of this guide, you`ll be able to see your
                                        programmed
                                        Actor
                                        floating above a table in the level. </p>
                                </div>
                            </li>
                            <li class="bg-white px-6 py-4 rounded shadow hover:shadow-md">
                                <a class="uk-accordion-title" href="#"> Your First webpage</a>
                                <div class="uk-accordion-content mt-3">
                                    <p> The primary goal of this quick start guide is to introduce you to
                                        Unreal
                                        Engine 4`s (UE4) development environment. By the end of this guide,
                                        you`ll
                                        know how to set up and develop C++ Projects in UE4. This guide shows
                                        you
                                        how
                                        to create a new Unreal Engine project, add a new C++ class to it,
                                        compile
                                        the project, and add an instance of a new class to your level. By
                                        the
                                        time
                                        you reach the end of this guide, you`ll be able to see your
                                        programmed
                                        Actor
                                        floating above a table in the level. </p>
                                </div>
                            </li>
                            <li class="bg-white px-6 py-4 rounded shadow hover:shadow-md">
                                <a class="uk-accordion-title" href="#"> Some Special Tags </a>
                                <div class="uk-accordion-content mt-3">
                                    <p> The primary goal of this quick start guide is to introduce you to
                                        Unreal
                                        Engine 4`s (UE4) development environment. By the end of this guide,
                                        you`ll
                                        know how to set up and develop C++ Projects in UE4. This guide shows
                                        you
                                        how
                                        to create a new Unreal Engine project, add a new C++ class to it,
                                        compile
                                        the project, and add an instance of a new class to your level. By
                                        the
                                        time
                                        you reach the end of this guide, you`ll be able to see your
                                        programmed
                                        Actor
                                        floating above a table in the level. </p>
                                </div>
                            </li>
                            <li class="bg-white px-6 py-4 rounded shadow hover:shadow-md">
                                <a class="uk-accordion-title" href="#"> Html Introduction </a>
                                <div class="uk-accordion-content mt-3">
                                    <p> The primary goal of this quick start guide is to introduce you to
                                        Unreal
                                        Engine 4`s (UE4) development environment. By the end of this guide,
                                        you`ll
                                        know how to set up and develop C++ Projects in UE4. This guide shows
                                        you
                                        how
                                        to create a new Unreal Engine project, add a new C++ class to it,
                                        compile
                                        the project, and add an instance of a new class to your level. By
                                        the
                                        time
                                        you reach the end of this guide, you`ll be able to see your
                                        programmed
                                        Actor
                                        floating above a table in the level. </p>
                                </div>
                            </li>
                        </ul>

                    </li>

                    <li>

                        <h3 class="mb-4"> Announcement </h3>

                        <div class="flex items-center gap-x-4 mb-5">
                            <img src="assets/images/avatars/avatar-4.jpg" alt="" class="rounded-full shadow w-12 h-12" />
                            <div>
                                <h4 class="-mb-1 text-base"> Stella Johnson</h4>
                                <span class="text-sm"> Instructor <span class="text-gray-500"> 1 year ago </span> </span>
                            </div>
                        </div>

                        <h4 class="leading-8 text-xl"> Nam liber tempor cum soluta nobis eleifend option congue imperdiet
                            doming id quod mazim placerat facer possim assum.</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam
                            liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                            placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat.</p>


                    </li>
                    <li>

                        <div class="flex space-x-5 mb-8" id="reviews">
                            <div class="lg:w-1/4 w-full">
                                <div class="bg-blue-100 p-6 rounded-md border border-blue-200 text-center shadow-xs">
                                    <h1 class="leading-none text-6xl"> 4.8</h1>
                                    <div class="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-gray-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <h5 class="text-lg mb-0 mt-2 text-blue-800"> Course Rating</h5>
                                </div>
                            </div>
                            <div class="w-2/4 hidden lg:flex flex-col justify-center">

                                <div class="space-y-5">
                                    <div class="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                        <div class="w-11/12 h-3 rounded-lg bg-gray-800"> </div>
                                    </div>
                                    <div class="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                        <div class="w-4/5 h-3 rounded-lg bg-gray-800"> </div>
                                    </div>
                                    <div class="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                        <div class="w-3/5 h-3 rounded-lg bg-gray-800"> </div>
                                    </div>
                                    <div class="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                        <div class="w-3/6 h-3 rounded-lg bg-gray-800"> </div>
                                    </div>
                                    <div class="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                        <div class="w-1/3 h-3 rounded-lg bg-gray-800"> </div>
                                    </div>
                                </div>

                            </div>
                            <div class="w-1/4 hidden lg:flex flex-col justify-center">
                                <div class="space-y-1">
                                    <div class="flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span class="ml-2"> 95 %</span>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-gray-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span class="ml-2"> 85 %</span>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-gray-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span class="ml-2"> 60 %</span>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-gray-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span class="ml-2"> 50 %</span>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-orange-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5 text-gray-400">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span class="ml-2"> 35 %</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 class="mb-4"> Reviews (4610) </h3>
                        <div class="flex gap-x-4 mb-5 relative">
                            <img src="assets/images/avatars/avatar-4.jpg" alt="" class="rounded-full shadow w-12 h-12" />
                            <div>
                                <h4 class="text-base m-0"> Stella Johnson</h4>
                                <span class="text-gray-700 text-sm"> Student </span>
                                <p class="mt-3">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </p>

                                <div class="flex justify-center items-center absolute right-0 top-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-gray-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div class="flex gap-x-4 mb-5 relative">
                            <img src="assets/images/avatars/avatar-4.jpg" alt="" class="rounded-full shadow w-12 h-12" />
                            <div>
                                <h4 class="text-base m-0"> Stella Johnson</h4>
                                <span class="text-gray-700 text-sm"> Student </span>
                                <p class="mt-3">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </p>

                                <div class="flex justify-center items-center absolute right-0 top-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-gray-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div class="flex gap-x-4 mb-5 relative">
                            <img src="assets/images/avatars/avatar-4.jpg" alt="" class="rounded-full shadow w-12 h-12" />
                            <div>
                                <h4 class="text-base m-0"> Stella Johnson</h4>
                                <span class="text-gray-700 text-sm"> Student </span>
                                <p class="mt-3">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </p>

                                <div class="flex justify-center items-center absolute right-0 top-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-gray-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div class="flex gap-x-4 mb-5 relative">
                            <img src="assets/images/avatars/avatar-4.jpg" alt="" class="rounded-full shadow w-12 h-12" />
                            <div>
                                <h4 class="text-base m-0"> Stella Johnson</h4>
                                <span class="text-gray-700 text-sm"> Student </span>
                                <p class="mt-3">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </p>

                                <div class="flex justify-center items-center absolute right-0 top-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-orange-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5 text-gray-400">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <h3 class="mb-4"> Add your comment </h3>
                        <div class="flex gap-x-4 mb-5 relative">
                            <img src="assets/images/avatars/avatar-4.jpg" alt="" class="rounded-full shadow w-12 h-12" />
                            <div class="flex-1">
                                <div class="grid grid-cols-2 gap-y-0 gap-x-4">
                                    <div>
                                        <input type="text" placeholder="name" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <div class="col-span-2">
                                        <textarea name="" id="" cols="30" rows="6"></textarea>
                                    </div>
                                    <div class="col-span-2 flex justify-between py-4">
                                        <p class="m-0 text-gray-600"> Some HTML is okay </p>
                                        <input type="submit" value="Post Comment" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>

                </ul>

            </div>
        </>
    )
}