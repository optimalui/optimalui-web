/* eslint-disable */
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { TabStrip, Tab, TabItem } from "optimalui-react";
import { DocTable, DocTableRow, TableRowItem } from "../DocTable";
import MarkupButtons from "../MarkupButtons";

const tabStripUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { TabStrip,Tab } from 'optimalui-react'

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

const tabStripAlignment = `
import React from 'react';
import ReactDOM from 'react-dom';
import { TabStrip,Tab } from 'optimalui-react'

class App extends React.Component {
    render() { 
        return (
                <p className="uk-text-lead">Center Alignment</p>
                <TabStrip alignTabs="center">
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
                <p className="uk-text-lead">Left Alignment</p> 
                <TabStrip alignTabs="left">
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
                <p className="uk-text-lead">Right Alignment</p>   
                <TabStrip alignTabs="right">
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

                <p className="uk-text-lead">Bottom Alignment</p>
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
                <p className="uk-text-lead">Vertical Left Alignment</p>
                <TabStrip alignTabs="v-left">
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
                <p className="uk-text-lead">Vertical Right Alignment</p>
                <TabStrip alignTabs="v-right">
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
            )
        }
    }

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const tabStripDropDown = `
import React from 'react';
import ReactDOM from 'react-dom';
import { TabStrip,Tab,TabItem } from 'optimalui-react'

class App extends React.Component {
    render() { 
        return (

        <TabStrip>
            <Tab title="Preview">
                <TabStrip>
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
                    <Tab title="New York">
                            <p>
                                New York City was the first capital of the United States after the Constitution was ratified in 1788. 
                                On April 30, 1789, George Washington was inaugurated as the nation’s first president at Federal Hall, located on Wall Street.
                            </p>
                        </Tab>
                    <Tab title="More" dropdown={true}>
                        <TabItem title="Paris">
                            <p>
                                Paris is the capital and most populous city of France.
                                The history of Paris dates back to approximately 259 BC, with the Parisii, a Celtic tribe settled on the banks of the Seine.
                                In 52 BC, the fishermen village was conquered by the Romans, founding a Gallo-Roman town called Lutetia.
                                The city changed its name to Paris during the fourth century.
                                During this period, the city was threatened by Attila the Hun and his army, and according to the legend, the inhabitants of Paris resisted the attacks thanks to the providential intervention of Saint Geneviève (patron saint of the city).
                            </p>
                        </TabItem>
                        <TabItem title="London">
                            <p>
                                The city of London was founded by the Romans and their rule extended from 43 AD to the fifth century AD, when the Empire fell.
                                During the third century, Londinium, the name given to the town by the Romans, had a population of 50,000, mainly due to the influence of its major port.
                                As a consequence of repeated Anglo-Saxon invasions during the fifth century, Londinium declined and during the eighth century it became the capital of the Kingdom of Essex.
                            </p>
                        </TabItem>
                        <TabItem title="Sydney" disabled>
                            <p>
                                Sydney was founded in 1788 when the first fleet arrived in Australia from England. 
                                On 13 May 1787 a fleet of 11 ships set sail from Portsmouth, England. 
                                On board were 759 convicts, most of them men with sailors and marines to guard the prisoners. 
                                With them they took seeds, farm implements, livestock such as cattle, sheep, pigs, goats, horses and chickens and 2 years supply of food.
                                The first colonists came ashore at Port Jackson on 26 January 1788.
                                They were commanded by Captain Arthur Phillip (1738-1814).
                            </p>
                        </TabItem>
                    </Tab>
                </TabStrip>
            </Tab>
            <Tab title="Markup">

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

const tabStripAnimation = `
import React from 'react';
import ReactDOM from 'react-dom';
import { TabStrip,Tab,TabItem } from 'optimalui-react'

class App extends React.Component {
    render() { 
        return (

        <TabStrip>
            <Tab title="Preview">
                <TabStrip selected={selected} onSelect={handleSelect} animation='fadeInRight'>
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
                        <Tab title="New York">
                                <p>
                                New York City was the first capital of the United States after the Constitution was ratified in 1788. 
                                On April 30, 1789, George Washington was inaugurated as the nation’s first president at Federal Hall, located on Wall Street.
                                </p>
                            </Tab>
                        <Tab title="More" dropdown={true}>
                            <TabItem title="Paris">
                                <p>
                                    Paris is the capital and most populous city of France.
                                    The history of Paris dates back to approximately 259 BC, with the Parisii, a Celtic tribe settled on the banks of the Seine.
                                    In 52 BC, the fishermen village was conquered by the Romans, founding a Gallo-Roman town called Lutetia.
                                    The city changed its name to Paris during the fourth century.
                                    During this period, the city was threatened by Attila the Hun and his army, and according to the legend, the inhabitants of Paris resisted the attacks thanks to the providential intervention of Saint Geneviève (patron saint of the city).
                            </p>
                            </TabItem>
                            <TabItem title="London">
                                <p>
                                    The city of London was founded by the Romans and their rule extended from 43 AD to the fifth century AD, when the Empire fell.
                                    During the third century, Londinium, the name given to the town by the Romans, had a population of 50,000, mainly due to the influence of its major port.
                                    As a consequence of repeated Anglo-Saxon invasions during the fifth century, Londinium declined and during the eighth century it became the capital of the Kingdom of Essex.
                            </p>
                            </TabItem>
                            <TabItem title="Sydney" disabled>
                                <p>
                                    Sydney was founded in 1788 when the first fleet arrived in Australia from England. On 13 May 1787 a fleet of 11 ships set sail from Portsmouth, England. 
                                    On board were 759 convicts, most of them men with sailors and marines to guard the prisoners. 
                                    With them they took seeds, farm implements, livestock such as cattle, sheep, pigs, goats, horses and chickens and 2 years supply of food. 
                                    The first colonists came ashore at Port Jackson on 26 January 1788. 
                                    They were commanded by Captain Arthur Phillip (1738-1814).
                            </p>
                            </TabItem>
                        </Tab>
                </TabStrip>
            </Tab>
            <Tab title="Markup">

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

const items = [
  {
    disabled: false,
    city: "Istanbul",
    temp: 18,
    weather: "rainy",
  },
  {
    disabled: false,
    city: "New York",
    temp: 29,
    weather: "sunny",
  },
  {
    disabled: false,
    city: "Sofia",
    temp: 23,
    weather: "cloudy",
  },
  {
    disabled: false,
    city: "London",
    temp: 19,
    weather: "cloudy",
  },
  {
    disabled: true,
    city: "Paris",
    temp: 19,
    weather: "cloudy",
  },
];

const configurationSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { TabStrip,Tab } from 'optimalui-react'

class App extends React.Component {
    render() { 
        const items = [{
            disabled: false,
            city: "Istanbul",
            temp: 18,
            weather: "rainy"
        }, {
            disabled: false,
            city: "New York",
            temp: 29,
            weather: "sunny"
        }, {
            disabled: false,
            city: "Sofia",
            temp: 23,
            weather: "cloudy"
        }, {
            disabled: false,
            city: "London",
            temp: 19,
            weather: "cloudy"
        }, {
            disabled: true,
            city: "Paris",
            temp: 19,
            weather: "cloudy"
        }]

        return (
                <TabStrip>
                    {items.map((item,index)=> {
                        return (
                            <Tab disabled={item.disabled} title={item.city} key={index}>
                                <div style={{ margin: '30px',textAlign: 'center'}}>
                                    <h4>{item.temp}<span>&ordm;C</span></h4>
                                    <p>Weather in {item.city} is {item.weather}.</p>
                                </div>
                            </Tab>
                        );
                    })}
                 </TabStrip>
                )
                }
         }
            
    ReactDOM.render(
    <App />,
    document.querySelector('my-app')
    ) `;

const keyBoardItems = [
  {
    disabled: false,
    city: "Istanbul",
    temp: 18,
    weather: "rainy",
  },
  {
    disabled: false,
    city: "New York",
    temp: 29,
    weather: "sunny",
  },
  {
    disabled: true,
    city: "Sofia",
    temp: 23,
    weather: "cloudy",
  },
  {
    disabled: false,
    city: "London",
    temp: 19,
    weather: "cloudy",
  },
  {
    disabled: false,
    city: "Paris",
    temp: 19,
    weather: "cloudy",
  },
  {
    disabled: true,
    city: "Rome",
    temp: 19,
    weather: "cloudy",
  },
  {
    dropdown: true,
    city: "More",
    disabled: false,
    tabItems: [
      {
        disabled: false,
        city: "Barcelona",
        temp: 19,
        weather: "cloudy",
      },
      {
        disabled: false,
        city: "Moscow",
        temp: 17,
        weather: "rainy",
      },
      {
        disabled: false,
        city: "Singapure",
        temp: 22,
        weather: "sunny",
      },
    ],
  },
];

const keyboardSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { TabStrip,Tab } from 'optimalui-react'

class App extends React.Component {
    render() { 
        const keyBoardItems = [{
            disabled: false,
            city: "Istanbul",
            temp: 18,
            weather: "rainy"
        }, {
            disabled: false,
            city: "New York",
            temp: 29,
            weather: "sunny"
        }, {
            disabled: true,
            city: "Sofia",
            temp: 23,
            weather: "cloudy"
        }, {
            disabled: false,
            city: "London",
            temp: 19,
            weather: "cloudy"
        }, {
            disabled: false,
            city: "Paris",
            temp: 19,
            weather: "cloudy"
        },
        {
            disabled: true,
            city: "Rome",
            temp: 19,
            weather: "cloudy"
        },
        {
            dropdown: true,
            city: "More",
            disabled:false,
            tabItems:[
                {
                    disabled: false,
                    city: "Barcelona",
                    temp: 19,
                    weather: "cloudy"
                },
                {
                    disabled: false,
                    city: "Moscow",
                    temp: 17,
                    weather: "rainy"
                },
                {
                    disabled: false,
                    city: "Singapure",
                    temp: 22,
                    weather: "sunny"
                }
            ]
        },
        ]

        return (
                <TabStrip>
                    {keyBoardItems.map((item, index) => {
                        return (
                            <Tab disabled={item.disabled} title={item.city} key={index} dropdown={item.dropdown}>
                                {item.dropdown ?
                                    item.tabItems.map((tabItem, tabIndex) => (
                                        <TabItem title={tabItem.city} key={tabIndex}>
                                            <div style={{ margin: '30px', textAlign: 'center' }}>
                                                <h4>{tabItem.temp}<span>&ordm;C</span></h4>
                                                <p>Weather in {tabItem.city} is {tabItem.weather}.</p>
                                            </div>
                                        </TabItem>
                                    )) :
                                    <div style={{ margin: '30px', textAlign: 'center' }}>
                                        <h4>{item.temp}<span>&ordm;C</span></h4>
                                        <p>Weather in {item.city} is {item.weather}.</p>
                                    </div>
                                }
                            </Tab>
                        );
                    })}
                 </TabStrip>
                )
                }
         }
            
    ReactDOM.render(
    <App />,
    document.querySelector('my-app')
    ) `;

const props = [
  {
    prop: "className",
    propType: "string",
    required: "no",
    default: "''",
  },
  {
    prop: "selected",
    propType: "number",
    required: "no",
    default: "''",
  },
  {
    prop: "onSelect",
    propType: "func",
    required: "no",
    default: "null",
  },
  {
    prop: "alignTabs",
    propType: "string",
    required: "no",
    default: "''",
  },
  {
    prop: "animation",
    propType: "string",
    required: "no",
    default: "''",
  },
  {
    prop: "duration",
    propType: "string",
    required: "no",
    default: "1s",
  },
  {
    prop: "contentClassName",
    propType: "string",
    required: "no",
    default: "1s",
  },
];

const tabProps = [
  {
    prop: "className",
    propType: "string",
    required: "no",
    default: "''",
  },
  {
    prop: "text",
    propType: "string",
    required: "no",
    default: "''",
  },
  {
    prop: "disabled",
    propType: "bool",
    required: "no",
    default: "false",
  },
  {
    prop: "selected",
    propType: "bool",
    required: "no",
    default: "false",
  },
  {
    prop: "tabIndex",
    propType: "string",
    required: "no",
    default: "''",
  },
  {
    prop: "children",
    propType: "array,object,string",
    required: "no",
    default: "''",
  },
  {
    prop: "title",
    propType: "string",
    required: "yes",
    default: "''",
  },
  {
    prop: "alignment",
    propType: "string",
    required: "no",
    default: "''",
  },
  {
    prop: "dropdown",
    propType: "bool",
    required: "no",
    default: "false",
  },
  {
    prop: "selectedTabItemIndex",
    propType: "string,number",
    required: "no",
    default: "0",
  },
  {
    prop: "tabItemContent",
    propType: "array,object,string",
    required: "no",
    default: "''",
  },
  {
    prop: "openDropDown",
    propType: "bool",
    required: "no",
    default: "false",
  },
];

const tabItemProps = [
  {
    prop: "children",
    propType: "array,object,string",
    required: "no",
    default: "''",
  },
  {
    prop: "title",
    propType: "string",
    required: "yes",
    default: "''",
  },
  {
    prop: "onItemClick",
    propType: "func",
    required: "no",
    default: "null",
  },
  {
    prop: "disabled",
    propType: "bool",
    required: "no",
    default: "false",
  },
  {
    prop: "className",
    propType: "string",
    required: "no",
    default: "''",
  },
  {
    prop: "selected",
    propType: "bool",
    required: "no",
    default: "false",
  },
];


export const TabStripDoc = () => {
  const [selected, setSelected] = useState(0);
  const handleSelect = (e) => {
    setSelected(e.selectedTabIndex);
  };
  return (
    <div className="uk-container uk-container-small uk-position-relative">
      <h1>TabStrip</h1>
      <p className="uk-text-lead">
        The TabStrip component displays a collection of tabs with associated
        content.
      </p>
      {/** USAGE */}
      <h2 id="usage" className="uk-h3 tm-heading-fragment">
        <a href="#usage">Usage</a>
      </h2>
      
      <p>
        Use <code>Tab</code> component to set TabStript content. To disable a
        Tab set <code>disabled</code> prop to <code>true</code>.
      </p>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
          <Tab title="Preview">
            <div>
              <TabStrip>
                <Tab title="Istanbul">
                  <p>
                    Beautiful Istanbul, both modern and historical city.
                    Istanbul has 8500 years old history, wich discovered by
                    Yenikapı Theodosius port excavation. So that, new period
                    started about Istanbul’s archaeological history. First
                    settlement established B.C in 700 by Greeks. This city,
                    become the capital of rome and east rome empire in the name
                    of Constantinapole. It was conquered by the Ottoman empire
                    in 1453 and become capital for five centuries.
                  </p>
                </Tab>
                <Tab title="Paris">
                  <p>
                    Paris is the capital and most populous city of France. The
                    history of Paris dates back to approximately 259 BC, with
                    the Parisii, a Celtic tribe settled on the banks of the
                    Seine. In 52 BC, the fishermen village was conquered by the
                    Romans, founding a Gallo-Roman town called Lutetia. The city
                    changed its name to Paris during the fourth century. During
                    this period, the city was threatened by Attila the Hun and
                    his army, and according to the legend, the inhabitants of
                    Paris resisted the attacks thanks to the providential
                    intervention of Saint Geneviève (patron saint of the city).
                  </p>
                </Tab>
                <Tab title="London">
                  <p>
                    The city of London was founded by the Romans and their rule
                    extended from 43 AD to the fifth century AD, when the Empire
                    fell. During the third century, Londinium, the name given to
                    the town by the Romans, had a population of 50,000, mainly
                    due to the influence of its major port. As a consequence of
                    repeated Anglo-Saxon invasions during the fifth century,
                    Londinium declined and during the eighth century it became
                    the capital of the Kingdom of Essex.
                  </p>
                </Tab>
                <Tab title="Sydney" disabled={true}>
                  <p>
                    Sydney was founded in 1788 when the first fleet arrived in
                    Australia from England. On 13 May 1787 a fleet of 11 ships
                    set sail from Portsmouth, England. On board were 759
                    convicts, most of them men with sailors and marines to guard
                    the prisoners. With them they took seeds, farm implements,
                    livestock such as cattle, sheep, pigs, goats, horses and
                    chickens and 2 years supply of food. The first colonists
                    came ashore at Port Jackson on 26 January 1788. They were
                    commanded by Captain Arthur Phillip (1738-1814).
                  </p>
                </Tab>
              </TabStrip>
            </div>
          </Tab>
          <Tab title="Markup">
            <SyntaxHighlighter language="javascript" style={docco}>
              {tabStripUsage}
            </SyntaxHighlighter>
            <MarkupButtons codeText={tabStripUsage} />
          </Tab>
        </TabStrip>
      </div>
      {/** ALIGNMENT */}
      <h2 id="alignment" className="uk-h3 tm-heading-fragment">
        <a href="#alignment">Alignment</a>
      </h2>
      <p>
        Add <code>alignTabs</code> prop to change tabs alignment.
        <code>alignTabs</code> prop values should be one of <code>center</code>,
        <code>bottom</code>,<code>left</code> and <code>right</code> values. To
        vertical left and right alightments ,<code>alignTabs</code> prop values
        should be <code>v-left</code> or <code>v-right</code>
      </p>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip onSelect={handleSelect}>
          <Tab title="Preview" selected>
            <p className="uk-text-lead">Center Alignment</p>
            <div>
              <TabStrip alignTabs="center">
                <Tab title="Istanbul">
                  <p>
                    Beautiful Istanbul, both modern and historical city.
                    Istanbul has 8500 years old history, wich discovered by
                    Yenikapı Theodosius port excavation. So that, new period
                    started about Istanbul’s archaeological history. First
                    settlement established B.C in 700 by Greeks. This city,
                    become the capital of rome and east rome empire in the name
                    of Constantinapole. It was conquered by the Ottoman empire
                    in 1453 and become capital for five centuries.
                  </p>
                </Tab>
                <Tab title="Paris">
                  <p>
                    Paris is the capital and most populous city of France. The
                    history of Paris dates back to approximately 259 BC, with
                    the Parisii, a Celtic tribe settled on the banks of the
                    Seine. In 52 BC, the fishermen village was conquered by the
                    Romans, founding a Gallo-Roman town called Lutetia. The city
                    changed its name to Paris during the fourth century. During
                    this period, the city was threatened by Attila the Hun and
                    his army, and according to the legend, the inhabitants of
                    Paris resisted the attacks thanks to the providential
                    intervention of Saint Geneviève (patron saint of the city).
                  </p>
                </Tab>
                <Tab title="London">
                  <p>
                    The city of London was founded by the Romans and their rule
                    extended from 43 AD to the fifth century AD, when the Empire
                    fell. During the third century, Londinium, the name given to
                    the town by the Romans, had a population of 50,000, mainly
                    due to the influence of its major port. As a consequence of
                    repeated Anglo-Saxon invasions during the fifth century,
                    Londinium declined and during the eighth century it became
                    the capital of the Kingdom of Essex.
                  </p>
                </Tab>
                <Tab title="Sydney" disabled={true}>
                  <p>
                    Sydney was founded in 1788 when the first fleet arrived in
                    Australia from England. On 13 May 1787 a fleet of 11 ships
                    set sail from Portsmouth, England. On board were 759
                    convicts, most of them men with sailors and marines to guard
                    the prisoners. With them they took seeds, farm implements,
                    livestock such as cattle, sheep, pigs, goats, horses and
                    chickens and 2 years supply of food. The first colonists
                    came ashore at Port Jackson on 26 January 1788. They were
                    commanded by Captain Arthur Phillip (1738-1814).
                  </p>
                </Tab>
              </TabStrip>
            </div>
            <p className="uk-text-lead">Left Alignment</p>
            <TabStrip alignTabs="left">
              <Tab title="Istanbul" selected>
                <p>
                  Beautiful Istanbul, both modern and historical city. Istanbul
                  has 8500 years old history, wich discovered by Yenikapı
                  Theodosius port excavation. So that, new period started about
                  Istanbul’s archaeological history. First settlement
                  established B.C in 700 by Greeks. This city, become the
                  capital of rome and east rome empire in the name of
                  Constantinapole. It was conquered by the Ottoman empire in
                  1453 and become capital for five centuries.
                </p>
              </Tab>
              <Tab title="Paris">
                <p>
                  Paris is the capital and most populous city of France. The
                  history of Paris dates back to approximately 259 BC, with the
                  Parisii, a Celtic tribe settled on the banks of the Seine. In
                  52 BC, the fishermen village was conquered by the Romans,
                  founding a Gallo-Roman town called Lutetia. The city changed
                  its name to Paris during the fourth century. During this
                  period, the city was threatened by Attila the Hun and his
                  army, and according to the legend, the inhabitants of Paris
                  resisted the attacks thanks to the providential intervention
                  of Saint Geneviève (patron saint of the city).
                </p>
              </Tab>
              <Tab title="London">
                <p>
                  The city of London was founded by the Romans and their rule
                  extended from 43 AD to the fifth century AD, when the Empire
                  fell. During the third century, Londinium, the name given to
                  the town by the Romans, had a population of 50,000, mainly due
                  to the influence of its major port. As a consequence of
                  repeated Anglo-Saxon invasions during the fifth century,
                  Londinium declined and during the eighth century it became the
                  capital of the Kingdom of Essex.
                </p>
              </Tab>
              <Tab title="Sydney" disabled={true}>
                <p>
                  Sydney was founded in 1788 when the first fleet arrived in
                  Australia from England. On 13 May 1787 a fleet of 11 ships set
                  sail from Portsmouth, England. On board were 759 convicts,
                  most of them men with sailors and marines to guard the
                  prisoners. With them they took seeds, farm implements,
                  livestock such as cattle, sheep, pigs, goats, horses and
                  chickens and 2 years supply of food. The first colonists came
                  ashore at Port Jackson on 26 January 1788. They were commanded
                  by Captain Arthur Phillip (1738-1814).
                </p>
              </Tab>
            </TabStrip>
            <p className="uk-text-lead">Right Alignment</p>
            <TabStrip alignTabs="right">
              <Tab title="Istanbul">
                <p>
                  Beautiful Istanbul, both modern and historical city. Istanbul
                  has 8500 years old history, wich discovered by Yenikapı
                  Theodosius port excavation. So that, new period started about
                  Istanbul’s archaeological history. First settlement
                  established B.C in 700 by Greeks. This city, become the
                  capital of rome and east rome empire in the name of
                  Constantinapole. It was conquered by the Ottoman empire in
                  1453 and become capital for five centuries.
                </p>
              </Tab>
              <Tab title="Paris">
                <p>
                  Paris is the capital and most populous city of France. The
                  history of Paris dates back to approximately 259 BC, with the
                  Parisii, a Celtic tribe settled on the banks of the Seine. In
                  52 BC, the fishermen village was conquered by the Romans,
                  founding a Gallo-Roman town called Lutetia. The city changed
                  its name to Paris during the fourth century. During this
                  period, the city was threatened by Attila the Hun and his
                  army, and according to the legend, the inhabitants of Paris
                  resisted the attacks thanks to the providential intervention
                  of Saint Geneviève (patron saint of the city).
                </p>
              </Tab>
              <Tab title="London">
                <p>
                  The city of London was founded by the Romans and their rule
                  extended from 43 AD to the fifth century AD, when the Empire
                  fell. During the third century, Londinium, the name given to
                  the town by the Romans, had a population of 50,000, mainly due
                  to the influence of its major port. As a consequence of
                  repeated Anglo-Saxon invasions during the fifth century,
                  Londinium declined and during the eighth century it became the
                  capital of the Kingdom of Essex.
                </p>
              </Tab>
              <Tab title="Sydney" disabled={true}>
                <p>
                  Sydney was founded in 1788 when the first fleet arrived in
                  Australia from England. On 13 May 1787 a fleet of 11 ships set
                  sail from Portsmouth, England. On board were 759 convicts,
                  most of them men with sailors and marines to guard the
                  prisoners. With them they took seeds, farm implements,
                  livestock such as cattle, sheep, pigs, goats, horses and
                  chickens and 2 years supply of food. The first colonists came
                  ashore at Port Jackson on 26 January 1788. They were commanded
                  by Captain Arthur Phillip (1738-1814).
                </p>
              </Tab>
            </TabStrip>

            <p className="uk-text-lead">Bottom Alignment</p>
            <TabStrip alignTabs="bottom">
              <Tab title="Istanbul">
                <p>
                  Beautiful Istanbul, both modern and historical city. Istanbul
                  has 8500 years old history, wich discovered by Yenikapı
                  Theodosius port excavation. So that, new period started about
                  Istanbul’s archaeological history. First settlement
                  established B.C in 700 by Greeks. This city, become the
                  capital of rome and east rome empire in the name of
                  Constantinapole. It was conquered by the Ottoman empire in
                  1453 and become capital for five centuries.
                </p>
              </Tab>
              <Tab title="Paris">
                <p>
                  Paris is the capital and most populous city of France. The
                  history of Paris dates back to approximately 259 BC, with the
                  Parisii, a Celtic tribe settled on the banks of the Seine. In
                  52 BC, the fishermen village was conquered by the Romans,
                  founding a Gallo-Roman town called Lutetia. The city changed
                  its name to Paris during the fourth century. During this
                  period, the city was threatened by Attila the Hun and his
                  army, and according to the legend, the inhabitants of Paris
                  resisted the attacks thanks to the providential intervention
                  of Saint Geneviève (patron saint of the city).
                </p>
              </Tab>
              <Tab title="London">
                <p>
                  The city of London was founded by the Romans and their rule
                  extended from 43 AD to the fifth century AD, when the Empire
                  fell. During the third century, Londinium, the name given to
                  the town by the Romans, had a population of 50,000, mainly due
                  to the influence of its major port. As a consequence of
                  repeated Anglo-Saxon invasions during the fifth century,
                  Londinium declined and during the eighth century it became the
                  capital of the Kingdom of Essex.
                </p>
              </Tab>
              <Tab title="Sydney" disabled={true}>
                <p>
                  Sydney was founded in 1788 when the first fleet arrived in
                  Australia from England. On 13 May 1787 a fleet of 11 ships set
                  sail from Portsmouth, England. On board were 759 convicts,
                  most of them men with sailors and marines to guard the
                  prisoners. With them they took seeds, farm implements,
                  livestock such as cattle, sheep, pigs, goats, horses and
                  chickens and 2 years supply of food. The first colonists came
                  ashore at Port Jackson on 26 January 1788. They were commanded
                  by Captain Arthur Phillip (1738-1814).
                </p>
              </Tab>
            </TabStrip>
            <p className="uk-text-lead">Vertical Left Alignment</p>
            <TabStrip alignTabs="v-left">
              <Tab title="Istanbul">
                <p>
                  Beautiful Istanbul, both modern and historical city. Istanbul
                  has 8500 years old history, wich discovered by Yenikapı
                  Theodosius port excavation. So that, new period started about
                  Istanbul’s archaeological history. First settlement
                  established B.C in 700 by Greeks. This city, become the
                  capital of rome and east rome empire in the name of
                  Constantinapole. It was conquered by the Ottoman empire in
                  1453 and become capital for five centuries.
                </p>
              </Tab>
              <Tab title="Paris">
                <p>
                  Paris is the capital and most populous city of France. The
                  history of Paris dates back to approximately 259 BC, with the
                  Parisii, a Celtic tribe settled on the banks of the Seine. In
                  52 BC, the fishermen village was conquered by the Romans,
                  founding a Gallo-Roman town called Lutetia. The city changed
                  its name to Paris during the fourth century. During this
                  period, the city was threatened by Attila the Hun and his
                  army, and according to the legend, the inhabitants of Paris
                  resisted the attacks thanks to the providential intervention
                  of Saint Geneviève (patron saint of the city).
                </p>
              </Tab>
              <Tab title="London">
                <p>
                  The city of London was founded by the Romans and their rule
                  extended from 43 AD to the fifth century AD, when the Empire
                  fell. During the third century, Londinium, the name given to
                  the town by the Romans, had a population of 50,000, mainly due
                  to the influence of its major port. As a consequence of
                  repeated Anglo-Saxon invasions during the fifth century,
                  Londinium declined and during the eighth century it became the
                  capital of the Kingdom of Essex.
                </p>
              </Tab>
              <Tab title="Sydney" disabled={true}>
                <p>
                  Sydney was founded in 1788 when the first fleet arrived in
                  Australia from England. On 13 May 1787 a fleet of 11 ships set
                  sail from Portsmouth, England. On board were 759 convicts,
                  most of them men with sailors and marines to guard the
                  prisoners. With them they took seeds, farm implements,
                  livestock such as cattle, sheep, pigs, goats, horses and
                  chickens and 2 years supply of food. The first colonists came
                  ashore at Port Jackson on 26 January 1788. They were commanded
                  by Captain Arthur Phillip (1738-1814).
                </p>
              </Tab>
            </TabStrip>
            <p className="uk-text-lead">Vertical Right Alignment</p>
            <TabStrip alignTabs="v-right">
              <Tab title="Istanbul">
                <p>
                  Beautiful Istanbul, both modern and historical city. Istanbul
                  has 8500 years old history, wich discovered by Yenikapı
                  Theodosius port excavation. So that, new period started about
                  Istanbul’s archaeological history. First settlement
                  established B.C in 700 by Greeks. This city, become the
                  capital of rome and east rome empire in the name of
                  Constantinapole. It was conquered by the Ottoman empire in
                  1453 and become capital for five centuries.
                </p>
              </Tab>
              <Tab title="Paris">
                <p>
                  Paris is the capital and most populous city of France. The
                  history of Paris dates back to approximately 259 BC, with the
                  Parisii, a Celtic tribe settled on the banks of the Seine. In
                  52 BC, the fishermen village was conquered by the Romans,
                  founding a Gallo-Roman town called Lutetia. The city changed
                  its name to Paris during the fourth century. During this
                  period, the city was threatened by Attila the Hun and his
                  army, and according to the legend, the inhabitants of Paris
                  resisted the attacks thanks to the providential intervention
                  of Saint Geneviève (patron saint of the city).
                </p>
              </Tab>
              <Tab title="London">
                <p>
                  The city of London was founded by the Romans and their rule
                  extended from 43 AD to the fifth century AD, when the Empire
                  fell. During the third century, Londinium, the name given to
                  the town by the Romans, had a population of 50,000, mainly due
                  to the influence of its major port. As a consequence of
                  repeated Anglo-Saxon invasions during the fifth century,
                  Londinium declined and during the eighth century it became the
                  capital of the Kingdom of Essex.
                </p>
              </Tab>
              <Tab title="Sydney" disabled={true}>
                <p>
                  Sydney was founded in 1788 when the first fleet arrived in
                  Australia from England. On 13 May 1787 a fleet of 11 ships set
                  sail from Portsmouth, England. On board were 759 convicts,
                  most of them men with sailors and marines to guard the
                  prisoners. With them they took seeds, farm implements,
                  livestock such as cattle, sheep, pigs, goats, horses and
                  chickens and 2 years supply of food. The first colonists came
                  ashore at Port Jackson on 26 January 1788. They were commanded
                  by Captain Arthur Phillip (1738-1814).
                </p>
              </Tab>
            </TabStrip>
          </Tab>
          <Tab title="Markup">
            <SyntaxHighlighter language="javascript" style={docco}>
              {tabStripAlignment}
            </SyntaxHighlighter>
            <MarkupButtons codeText={tabStripAlignment} />
          </Tab>
        </TabStrip>
      </div>
      {/** DropDown Tab */}
      <h2 id="dropdown" className="uk-h3 tm-heading-fragment">
        <a href="#dropdown">Dropdown Tab</a>
      </h2>
      <p>
        Set the <code>dropdown</code> property of the tab component to{" "}
        <code>true</code>. Add <code>TabItem</code> component as children of
        <code>Tab</code> component. To disable <code>TabItem</code> ,set{" "}
        <code>disabled</code> prop as <code>true</code>.
      </p>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
          <Tab title="Preview">
            <TabStrip>
              <Tab title="Istanbul">
                <p>
                  Beautiful Istanbul, both modern and historical city. Istanbul
                  has 8500 years old history, wich discovered by Yenikapı
                  Theodosius port excavation. So that, new period started about
                  Istanbul’s archaeological history. First settlement
                  established B.C in 700 by Greeks. This city, become the
                  capital of rome and east rome empire in the name of
                  Constantinapole. It was conquered by the Ottoman empire in
                  1453 and become capital for five centuries.
                </p>
              </Tab>
              <Tab title="New York">
                <p>
                  New York City was the first capital of the United States after
                  the Constitution was ratified in 1788. On April 30, 1789,
                  George Washington was inaugurated as the nation’s first
                  president at Federal Hall, located on Wall Street.
                </p>
              </Tab>
              <Tab title="More" dropdown={true}>
                <TabItem title="Paris">
                  <p>
                    Paris is the capital and most populous city of France. The
                    history of Paris dates back to approximately 259 BC, with
                    the Parisii, a Celtic tribe settled on the banks of the
                    Seine. In 52 BC, the fishermen village was conquered by the
                    Romans, founding a Gallo-Roman town called Lutetia. The city
                    changed its name to Paris during the fourth century. During
                    this period, the city was threatened by Attila the Hun and
                    his army, and according to the legend, the inhabitants of
                    Paris resisted the attacks thanks to the providential
                    intervention of Saint Geneviève (patron saint of the city).
                  </p>
                </TabItem>
                <TabItem title="London">
                  <p>
                    The city of London was founded by the Romans and their rule
                    extended from 43 AD to the fifth century AD, when the Empire
                    fell. During the third century, Londinium, the name given to
                    the town by the Romans, had a population of 50,000, mainly
                    due to the influence of its major port. As a consequence of
                    repeated Anglo-Saxon invasions during the fifth century,
                    Londinium declined and during the eighth century it became
                    the capital of the Kingdom of Essex.
                  </p>
                </TabItem>
                <TabItem title="Sydney" disabled>
                  <p>
                    Sydney was founded in 1788 when the first fleet arrived in
                    Australia from England. On 13 May 1787 a fleet of 11 ships
                    set sail from Portsmouth, England. On board were 759
                    convicts, most of them men with sailors and marines to guard
                    the prisoners. With them they took seeds, farm implements,
                    livestock such as cattle, sheep, pigs, goats, horses and
                    chickens and 2 years supply of food. The first colonists
                    came ashore at Port Jackson on 26 January 1788. They were
                    commanded by Captain Arthur Phillip (1738-1814).
                  </p>
                </TabItem>
              </Tab>
            </TabStrip>
          </Tab>
          <Tab title="Markup">
            <SyntaxHighlighter language="javascript" style={docco}>
              {tabStripDropDown}
            </SyntaxHighlighter>
            <MarkupButtons codeText={tabStripDropDown} />
          </Tab>
        </TabStrip>
      </div>
      {/** Animation */}
      <h2 id="animation" className="uk-h3 tm-heading-fragment">
        <a href="#animation">Animation</a>
      </h2>
      <p>
        TabStrip component uses{" "}
        <code>
          <a
            href="https://www.npmjs.com/package/react-animations"
            target="_blank"
          >
            react-animations
          </a>
        </code>{" "}
        react module. To implement an animation, set <code>animation</code> prop
        and set <code>duration</code> prop to change animation duration time.
      </p>
      <p>
        All animation collection should be inspect at this{" "}
        <code>
          <a href="http://react-animations.herokuapp.com/" target="_blank">
            link
          </a>
        </code>
      </p>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
          <Tab title="Preview">
            <TabStrip
              selected={selected}
              onSelect={handleSelect}
              animation="fadeInRight"
            >
              <Tab title="Istanbul">
                <p>
                  Beautiful Istanbul, both modern and historical city. Istanbul
                  has 8500 years old history, wich discovered by Yenikapı
                  Theodosius port excavation. So that, new period started about
                  Istanbul’s archaeological history. First settlement
                  established B.C in 700 by Greeks. This city, become the
                  capital of rome and east rome empire in the name of
                  Constantinapole. It was conquered by the Ottoman empire in
                  1453 and become capital for five centuries.
                </p>
              </Tab>
              <Tab title="New York">
                <p>
                  New York City was the first capital of the United States after
                  the Constitution was ratified in 1788. On April 30, 1789,
                  George Washington was inaugurated as the nation’s first
                  president at Federal Hall, located on Wall Street.
                </p>
              </Tab>
              <Tab title="More" dropdown={true}>
                <TabItem title="Paris">
                  <p>
                    Paris is the capital and most populous city of France. The
                    history of Paris dates back to approximately 259 BC, with
                    the Parisii, a Celtic tribe settled on the banks of the
                    Seine. In 52 BC, the fishermen village was conquered by the
                    Romans, founding a Gallo-Roman town called Lutetia. The city
                    changed its name to Paris during the fourth century. During
                    this period, the city was threatened by Attila the Hun and
                    his army, and according to the legend, the inhabitants of
                    Paris resisted the attacks thanks to the providential
                    intervention of Saint Geneviève (patron saint of the city).
                  </p>
                </TabItem>
                <TabItem title="London">
                  <p>
                    The city of London was founded by the Romans and their rule
                    extended from 43 AD to the fifth century AD, when the Empire
                    fell. During the third century, Londinium, the name given to
                    the town by the Romans, had a population of 50,000, mainly
                    due to the influence of its major port. As a consequence of
                    repeated Anglo-Saxon invasions during the fifth century,
                    Londinium declined and during the eighth century it became
                    the capital of the Kingdom of Essex.
                  </p>
                </TabItem>
                <TabItem title="Sydney" disabled>
                  <p>
                    Sydney was founded in 1788 when the first fleet arrived in
                    Australia from England. On 13 May 1787 a fleet of 11 ships
                    set sail from Portsmouth, England. On board were 759
                    convicts, most of them men with sailors and marines to guard
                    the prisoners. With them they took seeds, farm implements,
                    livestock such as cattle, sheep, pigs, goats, horses and
                    chickens and 2 years supply of food. The first colonists
                    came ashore at Port Jackson on 26 January 1788. They were
                    commanded by Captain Arthur Phillip (1738-1814).
                  </p>
                </TabItem>
              </Tab>
            </TabStrip>
          </Tab>
          <Tab title="Markup">
            <SyntaxHighlighter language="javascript" style={docco}>
              {tabStripAnimation}
            </SyntaxHighlighter>
            <MarkupButtons codeText={tabStripAnimation} />
          </Tab>
        </TabStrip>
      </div>

      {/** Configuration */}
      <h2 id="configuration" className="uk-h3 tm-heading-fragment">
        <a href="#configuration">Configuration</a>
      </h2>
      <p>
        The following example shows how to map a collection to <code>Tab</code>{" "}
        components.
      </p>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
          <Tab title="Preview">
            <TabStrip>
              {items.map((item, index) => {
                return (
                  <Tab disabled={item.disabled} title={item.city} key={index}>
                    <div style={{ margin: "30px", textAlign: "center" }}>
                      <h4>
                        {item.temp}
                        <span>&ordm;C</span>
                      </h4>
                      <p>
                        Weather in {item.city} is {item.weather}.
                      </p>
                    </div>
                  </Tab>
                );
              })}
            </TabStrip>
          </Tab>
          <Tab title="Markup">
            <SyntaxHighlighter language="javascript" style={docco}>
              {configurationSource}
            </SyntaxHighlighter>
            <MarkupButtons codeText={configurationSource} />
          </Tab>
        </TabStrip>
      </div>
      {/** Keyboard Navigation */}
      <h2 id="keyboard" className="uk-h3 tm-heading-fragment">
        <a href="#keyboard">Keyboard Navigation</a>
      </h2>
      <p>
        The <code>TabStrip</code> supports the following keyboard shortcuts:
      </p>
      <div className="uk-overflow-auto">
        <table className="uk-table uk-table-divider">
          <thead>
            <tr>
              <th align="left">Shortcut</th>
              <th align="left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <code>Ctrl+Right Arrow</code>
              </td>
              <td align="left">Sets the focus on the next available tab.</td>
            </tr>
            <tr>
              <td align="left">
                <code>Ctrl+Left Arrow</code>
              </td>
              <td align="left">
                Sets the focus on the previously available tab.
              </td>
            </tr>
            <tr>
              <td align="left">
                <code>Space</code>
              </td>
              <td align="left">Toggles open or close to dropdown Tab.</td>
            </tr>
            <tr>
              <td align="left">
                <code>Alt+Down Arrow</code>
              </td>
              <td align="left">
                Sets the focus on the next available tab dropdown item.
              </td>
            </tr>
            <tr>
              <td align="left">
                <code>Alt+Up Arrow</code>
              </td>
              <td align="left">
                Sets the focus on the previously available tab dropdown item.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
          <Tab title="Preview">
            <TabStrip>
              {keyBoardItems.map((item, index) => {
                return (
                  <Tab
                    disabled={item.disabled}
                    title={item.city}
                    key={index}
                    dropdown={item.dropdown}
                  >
                    {item.dropdown ? (
                      item.tabItems.map((tabItem, tabIndex) => (
                        <TabItem title={tabItem.city} key={tabIndex}>
                          <div style={{ margin: "30px", textAlign: "center" }}>
                            <h4>
                              {tabItem.temp}
                              <span>&ordm;C</span>
                            </h4>
                            <p>
                              Weather in {tabItem.city} is {tabItem.weather}.
                            </p>
                          </div>
                        </TabItem>
                      ))
                    ) : (
                      <div style={{ margin: "30px", textAlign: "center" }}>
                        <h4>
                          {item.temp}
                          <span>&ordm;C</span>
                        </h4>
                        <p>
                          Weather in {item.city} is {item.weather}.
                        </p>
                      </div>
                    )}
                  </Tab>
                );
              })}
            </TabStrip>
          </Tab>
          <Tab title="Markup">
            <SyntaxHighlighter language="javascript" style={docco}>
              {keyboardSource}
            </SyntaxHighlighter>
            <MarkupButtons codeText={keyboardSource} />
          </Tab>
        </TabStrip>
      </div>
      {/** ACCESSIBILITY */}
      <h2 id="accessibility" className="uk-h3 tm-heading-fragment">
        <a href="#accessibility">Accessibility</a>
      </h2>
      <p>
        The TabStrip is accessible by screen readers and provides{" "}
        <strong>WAI-ARIA</strong> support.
      </p>
      <p>
        The TabStrip uses the <code>aria-selected</code> and{" "}
        <code>aria-disabled</code> properties on the nested elements depending
        on the selected and disabled options.The TabStrip uses the{" "}
        <code>tablist</code> role.{" "}
      </p>

      {/** PROPS */}

      <h2 id="props" className="uk-h3 tm-heading-fragment">
        <a href="#props">Props</a>
      </h2>
      <p>
        The <code>TabStrip</code> component has the following props.
      </p>
      <div className="uk-overflow-auto">
        <DocTable heads={["prop", "propType", "required", "default"]}>
          {props.map((val, index) => (
            <DocTableRow key={index}>
              <TableRowItem>
                <code>{val.prop}</code>
              </TableRowItem>
              <TableRowItem>
                <code>{val.propType}</code>
              </TableRowItem>
              <TableRowItem>
                <code>{val.required}</code>
              </TableRowItem>
              <TableRowItem>
                <code>{val.default}</code>
              </TableRowItem>
            </DocTableRow>
          ))}
        </DocTable>
      </div>
      <p>
        The <code>Tab</code> component has the following props.
      </p>

      <DocTable heads={["prop", "propType", "required", "default"]}>
        {tabProps.map((val, index) => (
          <DocTableRow key={index}>
            <TableRowItem>
              <code>{val.prop}</code>
            </TableRowItem>
            <TableRowItem>
              <code>{val.propType}</code>
            </TableRowItem>
            <TableRowItem>
              <code>{val.required}</code>
            </TableRowItem>
            <TableRowItem>
              <code>{val.default}</code>
            </TableRowItem>
          </DocTableRow>
        ))}
      </DocTable>

      <p>
        The <code>TabItem</code> component has the following props.
      </p>
      <DocTable heads={["prop", "propType", "required", "default"]}>
        {tabItemProps.map((val, index) => (
          <DocTableRow key={index}>
            <TableRowItem>
              <code>{val.prop}</code>
            </TableRowItem>
            <TableRowItem>
              <code>{val.propType}</code>
            </TableRowItem>
            <TableRowItem>
              <code>{val.required}</code>
            </TableRowItem>
            <TableRowItem>
              <code>{val.default}</code>
            </TableRowItem>
          </DocTableRow>
        ))}
      </DocTable>

      <div className="tm-sidebar-right uk-visible@l">
        <div
          uk-sticky="offset: 160"
          className="uk-sticky uk-active uk-sticky-fixed"
        >
          <ul
            uk-scrollspy-nav="closest: li; scroll: true; offset: 100"
            className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon"
          >
            <li className="uk-active">
              <a href="#usage">Usage</a>
            </li>
            <li>
              <a href="#alignment">Alignment</a>
            </li>
            <li>
              <a href="#dropdown">Dropdown Tab</a>
            </li>
            <li>
              <a href="#animation">Animation</a>
            </li>
            <li>
              <a href="#configuration">Configuration</a>
            </li>
            <li>
              <a href="#keyboard">Keyboard Navigation</a>
            </li>
            <li>
              <a href="#accessibility">Accessibility</a>
            </li>
            <li>
              <a href="#props">Props</a>
            </li>
          </ul>
        </div>
        <div
          className="uk-sticky-placeholder"
          style={{ height: "249px", margin: "0px" }}
        ></div>
      </div>
    </div>
  );
};
