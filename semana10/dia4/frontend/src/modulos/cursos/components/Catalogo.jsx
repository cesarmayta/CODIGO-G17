import React from 'react';
import CursoList from './CursoList';

const Catalogo = () => {
    return (
        <div className="uk-container">
            <div className="flex gap-12">
                <div className="w-1/5 space-y-4 uk-visible@m">
                    <div>
                        <h4> Categories </h4>
                        <select data-selected-text-format="count" data-size="7"
                            title="All Categories">
                            <option> Web Development </option>
                            <option> Mobile App </option>
                            <option> Business </option>
                            <option> IT Software </option>
                            <option> Desings </option>
                            <option> Marketing </option>
                            <option> Life Style </option>
                            <option> Photography </option>
                            <option> Health Fitness </option>
                            <option> Ecommerce </option>
                            <option> Food cooking </option>
                            <option> Teaching academy </option>
                        </select>
                    </div>
                    <div>
                        <h4> Skill Levels</h4>
                        <div>
                            <div className="radio">
                                <input id="radio-1" name="radio" type="radio" checked/>
                                <label for="radio-1"><span className="radio-label"></span> Beginner <span> (25) </span>
                                </label>
                            </div>
                            <br/>
                            <div className="radio">
                                <input id="radio-2" name="radio" type="radio"/>
                                <label for="radio-2"><span className="radio-label"></span> Entermidate <span> (25) </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4> Course rating </h4>

                        <form>
                            <div className="radio">
                                <input id="course-rate-1" name="radio" type="radio" checked/>
                                <label for="course-rate-1"><span className="radio-label"></span>

                                    <div className="star-rating leading-4">
                                        <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                        <span className="star"></span> <span className="star"></span>
                                    </div> (320)

                                </label>
                            </div>
                            <br/>
                            <div className="radio">
                                <input id="course-rate-2" name="radio" type="radio"/>
                                <label for="course-rate-2"><span className="radio-label"></span>

                                    <div className="star-rating leading-4">
                                        <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                        <span className="star"></span> <span className="star half"></span>
                                    </div> (160)

                                </label>
                            </div>
                        </form>

                    </div>

                    <div>
                        <h4> Course type </h4>
                        <form>
                            <div className="radio">
                                <input id="course-type-1" name="radio" type="radio" checked/>
                                <label for="course-type-1"><span className="radio-label"></span>Free (42) </label>
                            </div>
                            <br/>
                            <div className="radio">
                                <input id="course-type-2" name="radio" type="radio"/>
                                <label for="course-type-2"><span className="radio-label"></span> Paid (42)</label>
                            </div>
                        </form>
                    </div>

                    <div>
                        <h4> Duration </h4>
                        <form>
                            <div className="radio">
                                <input id="course-duration-1" name="radio" type="radio" checked/>
                                <label for="course-duration-1"><span className="radio-label"></span> +5 Hourse (23) </label>
                            </div>
                            <br/>
                        </form>
                    </div>

                </div>
                <CursoList/>
            </div>
        </div>
    )
}

export default Catalogo;