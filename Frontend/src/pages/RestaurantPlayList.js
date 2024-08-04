import React from "react";
import { Row, Col, Card, Input, Select } from "antd";
import Logo from "../components/logo";
import BurpleNavBar from "../components/BurppleNavBar";
import RestaurantList from "../components/RestaurantList";
import PageHeader from '../components/PageHeader';

const { Option } = Select;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', /* Center items vertically */
        minHeight: '100vh', /* Full viewport height */
        padding: '10px', /* Optional: add padding if needed */
    },
    row: {
        // width: '100%',
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '0px',
    },
    card: {
        padding: '5px',
        textAlign: 'center',
        border: '#FFFF',
    },
    select: {
        width: '150px',
        fontSize: '16px',
    },
    appButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #EA246E',
        color: '#EA246E',
        borderRadius: '6px',
        fontSize: '0.8rem',
        cursor: 'pointer',
        padding: '10px 15px',
        transition: 'background-color 0.3s, color 0.3s',
        textDecoration: 'none',
    },
    buttonIcon: {
        marginLeft: '8px',
    },
};

export const RestaurantPlaylist = () => {
    return (
        <div style={styles.container}>
            {/* <Row
                justify="center"
                align="middle"
                gutter={[0, 20]}
                style={{ width: '100%' }} // Ensures Row takes full width
            > */}
            <Col >
                {/* Header and Navigation */}
                <div style={styles.headerContainer}>
                    <Logo />
                    <Select
                        defaultValue="Singapore"
                        style={styles.select}
                        dropdownStyle={{ backgroundColor: '#fff' }}
                        bordered={false}
                        dropdownMatchSelectWidth={false}
                    >
                        <Option value="Singapore">Singapore</Option>
                        <Option value="Kuala Lumpur">Kuala Lumpur</Option>
                        <Option value="Johor Bahru">Johor Bahru</Option>
                        <Option value="Manila">Manila</Option>
                    </Select>
                    <Input
                        placeholder="Search Your Favourite Restaurant"
                        onChange={null}
                    />
                    <div style={styles.appButton}>
                        Login
                    </div>
                </div>
                <BurpleNavBar />
                <PageHeader />

                <Card style={styles.card}>
                    <RestaurantList />
                </Card>

            </Col>
            {/* </Row> */}
        </div>
    );
};
