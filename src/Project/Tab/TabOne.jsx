import { Card, Row } from "reactstrap";

function TabOne() {
    return (
        <>
            <h6>AM A Tab 1</h6>

            <Row>
                <Card>
                    <ul >
                        {


                            ['Nav:Wrapper for all tab buttons', 'NavItem:One tab item',
                                'NavLink:Clickable tab button', 'TabContent:Wrapper for all tab contents',
                                'TabPane:Individual content of each tab'].map((item, key) => {
                                    return (
                                        <><li key={key}>{item}</li>
                                        </>
                                    )
                                })
                        }
                    </ul>
                </Card>

            </Row>


        </>
    )
}

export default TabOne;