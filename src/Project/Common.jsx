import React,{ useMemo } from "react";
import { Button, Row, Col } from "reactstrap";
function Common({ handleClick }) {
    const buttonList = useMemo(() => {
        const getRandomColor = () =>
            "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        return [{
            para: 'TODO', btnName: 'To-do-list', btnColor: getRandomColor()
        }, { para: 'TAB', btnName: 'Tab Components', btnColor: getRandomColor() }
        ]
    }, [])
    return (
        <>
            <Row>
                <Col md="12" className="d-flex  gap-3">
                    {buttonList.map((item, key) => {
                        return (
                            <Button key={key} onClick={() => handleClick(item.para)} style={{ background: item.btnColor }}>{item.btnName}</Button>
                        )
                    })}
                </Col>
            </Row>
        </>
    )
}

export default React.memo(Common);