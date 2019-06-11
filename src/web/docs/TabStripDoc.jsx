/* eslint-disable */
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TabStrip, Tab } from '../../components/layout';
import MarkupButtons from './MarkupButtons';

const tabStripUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { TabStrip,Tab } from '@optimalui/components/layout'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selected: 0
        }
    }
    handleSelect = (e) => {
        this.setState({selected: e.selectedTabIndex})
    }
    render() { 
        return (
                <TabStrip selected={this.state.selected} onSelect={handleSelect}>
                    <Tab title="Istanbul">
                        <p>
                            Beautiful Istanbul, both modern and historical city.
                            Istanbul has 8500 years old history, wich discovered by Yenikapı Theodosius port excavation.
                            So that, new period started about Istanbul’s archaeological history.
                            First settlement established B.C in 700 by Greeks.
                            This city, become the capital of rome and east rome empire in the name of Constantinapole.
                            It was conquered by the Ottoman empire in 1453 and become capital for five centuries.
                    </p>
                    </Tab>
                    <Tab title="Paris">
                        <p>
                        Paris is the capital and most populous city of France.
                        The history of Paris dates back to approximately 259 BC, with the Parisii, a Celtic tribe settled on the banks of the Seine. 
                        In 52 BC, the fishermen village was conquered by the Romans, founding a Gallo-Roman town called Lutetia.
                        The city changed its name to Paris during the fourth century. 
                        During this period, the city was threatened by Attila the Hun and his army, and according to the legend, the inhabitants of Paris resisted the attacks thanks to the providential intervention of Saint Geneviève (patron saint of the city). 
                        </p>
                    </Tab>
                    <Tab title="London">
                        <p>
                        The city of London was founded by the Romans and their rule extended from 43 AD to the fifth century AD, when the Empire fell.
                        During the third century, Londinium, the name given to the town by the Romans, had a population of 50,000, mainly due to the influence of its major port.
                        As a consequence of repeated Anglo-Saxon invasions during the fifth century, Londinium declined and during the eighth century it became the capital of the Kingdom of Essex.
                        </p>
                    </Tab>
                    <Tab title="Sydney" disabled={true}>
                        <p>
                        Sydney was founded in 1788 when the first fleet arrived in Australia from England. On 13 May 1787 a fleet of 11 ships set sail from Portsmouth, England.
                         On board were 759 convicts, most of them men with sailors and marines to guard the prisoners. 
                         With them they took seeds, farm implements, livestock such as cattle, sheep, pigs, goats, horses and chickens and 2 years supply of food. 
                         The first colonists came ashore at Port Jackson on 26 January 1788. They were commanded by Captain Arthur Phillip (1738-1814).
                        </p>
                    </Tab>
            </TabStrip>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

export const TabStripDoc = () => {
    const [selected, setSelected] = useState(0);
    const handleSelect = (e) => {
        setSelected(e.selectedTabIndex)
    }
    return (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>TabStrip</h1>
        <p className="uk-text-lead">The TabStrip component displays a collection of tabs with associated content.</p>
        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/layout</code> module to use TabStrip component.</p>
        <p>Use <code>Tab</code> component to set TabStript content. To disable a Tab set <code>disabled</code> prop to <code>true</code>.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <TabStrip selected={selected} onSelect={handleSelect}>
                        <Tab title="Istanbul">
                            <p>
                                Beautiful Istanbul, both modern and historical city.
                                Istanbul has 8500 years old history, wich discovered by Yenikapı Theodosius port excavation.
                                So that, new period started about Istanbul’s archaeological history.
                                First settlement established B.C in 700 by Greeks.
                                This city, become the capital of rome and east rome empire in the name of Constantinapole.
                                 It was conquered by the Ottoman empire in 1453 and become capital for five centuries.
                            </p>
                        </Tab>
                        <Tab title="Paris">
                            <p>
                                Paris is the capital and most populous city of France.
                                The history of Paris dates back to approximately 259 BC, with the Parisii, a Celtic tribe settled on the banks of the Seine.
                                In 52 BC, the fishermen village was conquered by the Romans, founding a Gallo-Roman town called Lutetia.
                                The city changed its name to Paris during the fourth century.
                                During this period, the city was threatened by Attila the Hun and his army, and according to the legend, the inhabitants of Paris resisted the attacks thanks to the providential intervention of Saint Geneviève (patron saint of the city).
                            </p>
                        </Tab>
                        <Tab title="London">
                            <p>
                                The city of London was founded by the Romans and their rule extended from 43 AD to the fifth century AD, when the Empire fell.
                                 During the third century, Londinium, the name given to the town by the Romans, had a population of 50,000, mainly due to the influence of its major port.
                                As a consequence of repeated Anglo-Saxon invasions during the fifth century, Londinium declined and during the eighth century it became the capital of the Kingdom of Essex.
                            </p>
                        </Tab>
                        <Tab title="Sydney" disabled={true}>
                            <p>
                                Sydney was founded in 1788 when the first fleet arrived in Australia from England. On 13 May 1787 a fleet of 11 ships set sail from Portsmouth, England. On board were 759 convicts, most of them men with sailors and marines to guard the prisoners. With them they took seeds, farm implements, livestock such as cattle, sheep, pigs, goats, horses and chickens and 2 years supply of food. The first colonists came ashore at Port Jackson on 26 January 1788. They were commanded by Captain Arthur Phillip (1738-1814).
                            </p>
                        </Tab>
                    </TabStrip>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{tabStripUsage}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={tabStripUsage} />
        </div>
         {/** ALIGNMENT */}
         <h2 id="alignment" className="uk-h3 tm-heading-fragment"><a href="#alignment">Alignment</a></h2>
         <p>
             Add <code>alignTabs</code> prop to change tabs alignment. 
         <code>alignTabs</code> prop values should be one of  <code>bottom</code>,<code>left</code> and <code>right</code> values
         </p>
         <div className="uk-position-relative uk-margin-medium">
                <TabStrip>
                    <Tab title="Preview">
                        <p>Bottom Alignment</p>
                        <TabStrip alignTabs="bottom">
                            <Tab title="Istanbul">
                                <p>
                                    Beautiful Istanbul, both modern and historical city.
                                    Istanbul has 8500 years old history, wich discovered by Yenikapı Theodosius port excavation.
                                    So that, new period started about Istanbul’s archaeological history.
                                    First settlement established B.C in 700 by Greeks.
                                    This city, become the capital of rome and east rome empire in the name of Constantinapole.
                                     It was conquered by the Ottoman empire in 1453 and become capital for five centuries.
                            </p>
                            </Tab>
                            <Tab title="Paris">
                                <p>
                                    Paris is the capital and most populous city of France.
                                    The history of Paris dates back to approximately 259 BC, with the Parisii, a Celtic tribe settled on the banks of the Seine.
                                    In 52 BC, the fishermen village was conquered by the Romans, founding a Gallo-Roman town called Lutetia.
                                    The city changed its name to Paris during the fourth century.
                                    During this period, the city was threatened by Attila the Hun and his army, and according to the legend, the inhabitants of Paris resisted the attacks thanks to the providential intervention of Saint Geneviève (patron saint of the city).
                            </p>
                            </Tab>
                            <Tab title="London">
                                <p>
                                    The city of London was founded by the Romans and their rule extended from 43 AD to the fifth century AD, when the Empire fell.
                                     During the third century, Londinium, the name given to the town by the Romans, had a population of 50,000, mainly due to the influence of its major port.
                                    As a consequence of repeated Anglo-Saxon invasions during the fifth century, Londinium declined and during the eighth century it became the capital of the Kingdom of Essex.
                            </p>
                            </Tab>
                            <Tab title="Sydney" disabled={true}>
                                <p>
                                    Sydney was founded in 1788 when the first fleet arrived in Australia from England. On 13 May 1787 a fleet of 11 ships set sail from Portsmouth, England. On board were 759 convicts, most of them men with sailors and marines to guard the prisoners. With them they took seeds, farm implements, livestock such as cattle, sheep, pigs, goats, horses and chickens and 2 years supply of food. The first colonists came ashore at Port Jackson on 26 January 1788. They were commanded by Captain Arthur Phillip (1738-1814).
                            </p>
                            </Tab>
                        </TabStrip>
                    </Tab>
                    <Tab title="Markup">

                    </Tab>
                </TabStrip>
         </div>
    </div>
    )
}