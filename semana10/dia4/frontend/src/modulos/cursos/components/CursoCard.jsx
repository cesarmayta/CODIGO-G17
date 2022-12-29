import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../../context/dataContext';

const CursoCard = ({ objCurso }) => {

    const { updateId } = useContext(DataContext)
    const navigate = useNavigate()

    const handlerCursoIntro = (cursoRefId) => {
        updateId(cursoRefId)
        navigate('/curso-intro')
    }

    return (
        <>
            <a href="#" className="course-card" onClick={()=>handlerCursoIntro(objCurso.curso_refid)}>

                <div className="course-card-thumbnail">
                    <div className="course-card-thumbnail-inner">
                        <img src={objCurso.curso_imagen} alt="" />
                    </div>
                    <span className="play-btn-trigger"></span>
                </div>
                <div className="course-card-content">
                    <h3>{objCurso.curso_titulo}</h3>
                    <span className="instructor"> {objCurso.instructor} </span>
                    <ul className="course-info">
                        <li> 13 total hours </li>
                        <span className="middot">·</span>
                        <li> 151 lectures </li>
                    </ul>
                </div>
                <div className="course-card-foot">
                    <div className="star-rating leading-4">
                        <span className="star"></span> <span className="star"></span> <span className="star"></span>
                        <span className="star"></span>
                        <span className="star half"></span>
                    </div>
                    <span className="pricing">
                        ${objCurso.curso_precio}
                    </span>
                </div>
            </a>
        </>
    )
}

export default CursoCard;