import * as classNames from "classnames";
import * as React from "react";

const styles = require("./style.css");

interface HeaderProps {
    className?: string;
}

export default class Header extends React.Component<HeaderProps, {}> {
    public render() {
        const {
            className,
        } = this.props;

        return (
            <header className={classNames(className, styles.container)}>
                <h2 className={styles.title}>
                    A Header
                </h2>
            </header>
        );
    }
}
