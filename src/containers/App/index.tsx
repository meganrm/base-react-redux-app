import * as React from "react";

import Content from "../Content";
import Header from "../Header";
import Sidebar from "../Sidebar";

const styles = require("./style.css");

export default class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div className={styles.container}>
                <Header className={styles.header} />
                <section className={styles.contentContainer}>
                    <Sidebar className={styles.sidebar} />
                    <Content className={styles.content} />
                </section>
            </div>
        );
    }
}
