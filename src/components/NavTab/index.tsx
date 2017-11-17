import Tabs from "antd/es/tabs";
import noop from "lodash/noop";
import values from "lodash/values";
import * as React from "react";

import { NavigationTab } from "../../constants";

require("style-loader!css-loader!antd/es/tabs/style/index.css");

interface NavTabProps {
    onChange?: (selection: string) => any;
    selectedNavTab?: string;
}

const NavTab: React.SFC<NavTabProps> = (props) => {
    const {
        onChange,
        selectedNavTab,
    } = props;

    const tabPanes = values(NavigationTab).map((tab) => (
        <Tabs.TabPane
            key={tab}
            tab={tab}
        />
    ));

    return (
        <Tabs
            activeKey={selectedNavTab}
            onChange={onChange}
        >
            {tabPanes}
        </Tabs>
    );
};

NavTab.defaultProps = {
    onChange: noop,
    selectedNavTab: NavigationTab.FirstTab,
};

export default NavTab;
