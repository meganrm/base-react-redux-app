import { expect } from "chai";

import { TypeToDescriptionMap } from "../types";
import {
    makeConstant,
    makeReducer,
} from "../util";

describe("state utilities", () => {
    describe("makeConstant", () => {
        it("returns a string in the form 'APP_NAMESPACE/REDUCER/ACTION_TYPE'", () => {
            const constant = makeConstant("foo", "bar");
            const [
                namespace,
                reducer,
                type,
            ] = constant.split("/");
            expect(constant).to.be.a("string");
            expect(namespace).to.equal("VISUAL_CELL");
            expect(reducer).to.equal("FOO");
            expect(type).to.equal("BAR");
        });
    });

    describe("makeReducer", () => {
        const ACTION_CONSTANT = "FAKE_CONSTANT";
        interface Action {
            type: string;
            arbitraryProp: boolean;
        }
        interface State {
            flag: boolean;
        }

        const initialState: State = {
            flag: false,
        };

        const typeToDescriptionMap: TypeToDescriptionMap = {
            [ACTION_CONSTANT]: {
                accepts: (action: any): action is Action => action.hasOwnProperty("arbitraryProp"),
                perform: (state: any, action: any) => ({ ...state, flag: action.arbitraryProp }),
            },
        };

        // typed as `any` because we know that `beforeEach` will in fact make this a valid function in every
        // assertion block
        let reducer: any;

        beforeEach(() => {
            reducer = makeReducer<State>(typeToDescriptionMap, initialState);
        });

        it("returns a reducer function", ()  => {
            expect(reducer).to.be.a("function");
        });

        it("returns given state if action type does not match key in typeToDescriptionMap", () => {
            const fakeAction = { type: "FAKE", arbitraryProp: true };
            expect(reducer(initialState, fakeAction)).to.equal(initialState);
        });

        it("returns given state if action does not pass type assertion", () => {
            const fakeAction = { type: ACTION_CONSTANT, payload: "Also fake" };
            expect(reducer(initialState, fakeAction)).to.equal(initialState);
        });

        it("returns the output of ActionDescription.perform if the type assertion passes", () => {
            const realAction = { type: ACTION_CONSTANT, arbitraryProp: true };
            const expectedOutput = typeToDescriptionMap[ACTION_CONSTANT].perform(initialState, realAction);
            const nextState = reducer(initialState, realAction);
            expect(nextState).to.not.equal(initialState);
            expect(nextState).to.deep.equal(expectedOutput);
        });
    });
});
