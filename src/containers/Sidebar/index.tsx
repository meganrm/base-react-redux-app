import * as React from "react";
import { connect } from "react-redux";

import Menu from "../../components/Menu";
import NavTab from "../../components/NavTab";

import { MenuElement } from "../../state/metadata/types";

import {
    metadata,
    selections,
    State,
} from "../../state";

interface SidebarProps {
    className?: string;
    requestMetadata: () => any;
    selectNavTab: (payload: any) => any;
    selectedNavTab: string;
    menuData: MenuElement[];
}

class Sidebar extends React.Component<SidebarProps, {}> {
    public constructor(props: SidebarProps) {
        super(props);

        this.onNavTabChange = this.onNavTabChange.bind(this);
    }

    public componentDidMount() {
        this.props.requestMetadata();
    }

    public onNavTabChange(selection: string) {
        this.props.selectNavTab(selection);
    }

    public renderMenu() {
        if (this.props.menuData.length === 0) {
            return null;
        }
        return (
            <Menu menuList={this.props.menuData}/>
        );
    }

    public render() {
        const {
            className,
            selectedNavTab,
        } = this.props;

        return (
            <section className={className}>
                <NavTab
                    onChange={this.onNavTabChange}
                    selectedNavTab={selectedNavTab}
                />
                {this.renderMenu()}
            </section>
        );
    }
}

function mapStateToProps(state: State) {
    return {
        menuData: metadata.selectors.getMenuData(state),
        selectedNavTab: selections.selectors.getNavTab(state),
    };
}

const dispatchToPropsMap = {
    requestMetadata: metadata.actions.requestCellModelMetadata,
    selectNavTab: selections.actions.selectNavTab,
};

export default connect(mapStateToProps, dispatchToPropsMap)(Sidebar);
