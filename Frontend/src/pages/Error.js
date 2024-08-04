import React from "react";
import { Layout, Result } from "antd";
import { WarningFilled } from "@ant-design/icons";

const Error = () => {
    return (
        <Layout>
            <Result
                icon={<WarningFilled style={{ color: "#ff4d4f", fontSize: "70px" }} />}
                title="Page Not Found"
                subTitle="We're sorry, the requested page cannot be found."
            />
        </Layout>
    );
};

export default Error;
