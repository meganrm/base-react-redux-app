import * as React from "react";

interface ContentProps {
    className?: string;
}

export default class Content extends React.Component<ContentProps, {}> {
    public render() {
        const {
            className,
        } = this.props;

        return <section className={className} />;
    }
}
