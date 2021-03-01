import React, { useEffect } from 'react';
import $ from "jquery";
import "./buy.css";


const Buy = (props) => {

    useEffect(() => {
        $('.close').on('click', () => {
            $('.main_buy').hide()
        })
    });

    return (
        <div className="main_buy">
            <span className="close">&times;</span>
            <h2 className="text-center my-3 buy_title">you can buy the new trees</h2>
            <div className="container">
                <div className="row my_row_buy text-center mt-5">
                    <div className="col">
                        <div className="all_boxes">
                            <div className="boxes">
                                <div className="one text-capitalize icon">No: 12</div>
                                <div className="two text-capitalize name_tree mb-3">tree you monther 1</div>
                                <div className="three text-capitalize points">3.3XP</div>
                            </div>
                            <img src="images/logo.png" alt="logo" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="all_boxes">
                            <div className="boxes">
                                <div className="one text-capitalize icon">No: 21</div>
                                <div className="two text-capitalize name_tree mb-3">tree you monther 1</div>
                                <div className="three text-capitalize points">3.5XP</div>
                            </div>
                            <img src="images/tree2.png" alt="tree1" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="all_boxes">
                            <div className="boxes">
                                <div className="one text-capitalize icon">No: 12</div>
                                <div className="two text-capitalize name_tree mb-3">tree you monther 1</div>
                                <div className="three text-capitalize points">4.3XP</div>
                            </div>
                            <img src="images/tree3.png" alt="tree3" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="all_boxes">
                            <div className="boxes">
                                <div className="one text-capitalize icon">No: 5</div>
                                <div className="two text-capitalize name_tree mb-3">tree you monther 1</div>
                                <div className="three text-capitalize points">3.8XP</div>
                            </div>
                            <img src="images/tree4.png" alt="tree5" />
                        </div>
                    </div>
                </div>
                <div className="row my_row_buy text-center mt-3">
                    <div className="col">
                        <div className="all_boxes">
                            <div className="boxes">
                                <div className="one text-capitalize icon">No: 4</div>
                                <div className="two text-capitalize name_tree mb-3">tree symphony</div>
                                <div className="three text-capitalize points">2.8XP</div>
                            </div>
                            <img src="images/tree5.png" alt="tree5" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="all_boxes">
                            <div className="boxes">
                                <div className="one text-capitalize icon">No: 11</div>
                                <div className="two text-capitalize name_tree mb-3">tree you bizare </div>
                                <div className="three text-capitalize points">5.5XP</div>
                            </div>
                            <img src="images/tree6.png" alt="tree5" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="all_boxes">
                            <div className="boxes">
                                <div className="one text-capitalize icon">No: 16</div>
                                <div className="two text-capitalize name_tree mb-3">tree you moon</div>
                                <div className="three text-capitalize points">4.4XP</div>
                            </div>
                            <img src="images/tree7.png" alt="tree5" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="all_boxes">
                            <div className="boxes">
                                <div className="one text-capitalize icon">No: 8</div>
                                <div className="two text-capitalize name_tree mb-3">tree you crismiss</div>
                                <div className="three text-capitalize points">3.8XP</div>
                            </div>
                            <img src="images/tree8.png" alt="tree5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy;



