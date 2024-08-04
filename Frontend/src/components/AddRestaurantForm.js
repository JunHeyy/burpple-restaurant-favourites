import React, { useState } from "react";
import { Form, Row, Col, Button, Input, Select, Modal } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const { Option } = Select;

export const AddRestaurantForm = ({ onFormSubmit, buttonLabel, onSearch }) => {
    const [visible, setVisible] = useState(false);

    const [searchForm] = Form.useForm(); // Form for search
    const [modalForm] = Form.useForm();   // Form for modal

    const handleOk = () => {
        modalForm.validateFields().then((values) => {
            onFormSubmit(values);
            modalForm.resetFields();
            setVisible(false);
        });
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleButtonClick = () => {
        setVisible(true);
    };

    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <>
            <Form form={searchForm} layout="horizontal">
                <Row gutter={20}>
                    <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                        <Form.Item
                            name="name"
                        >
                            <Input
                                placeholder="Search Your Favourite Restaurant"
                                onChange={handleSearchChange} // Handle input change
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                        <Button
                            type="primary"
                            onClick={handleButtonClick}
                            block
                            style={{
                                backgroundColor: "#EA246E",
                                borderColor: "#EA246E",
                            }}
                        >
                            <PlusCircleFilled />
                            {buttonLabel}
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Modal
                title="Add Restaurant"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Add"
                cancelText="Cancel"
            >
                <Form
                    form={modalForm}
                    layout="vertical"
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please input the restaurant name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="location"
                        label="Location"
                        rules={[{ required: true, message: 'Please input the location!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="cuisine"
                        label="Cuisine"
                        rules={[{ required: true, message: 'Please input the cuisine!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="cost"
                        label="Cost"
                        rules={[{ required: true, message: 'Please select the cost!' }]}
                    >
                        <Select>
                            <Option value="$">$</Option>
                            <Option value="$$">$$</Option>
                            <Option value="$$$">$$$</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
