import React, { useState } from 'react';
import tabsData from './tabsData';
import TabsWrapper from './TabsStyled';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <section className="section">
                <TabsWrapper>
                    <div className="tabs">
                        {
                            tabsData.map((currValue) => {
                                const { id, title } = currValue;
                                return (
                                    <button
                                        key={id}
                                        type="button"
                                        className={activeTab === id ? 'active' : ''}
                                        disabled={activeTab === id}
                                        onClick={() => setActiveTab(id)}
                                    >
                                        {title}
                                    </button>
                                );
                            })
                        }
                    </div>
                    <div className="tabs_panel">
                        {
                            tabsData.map((currValue) => {
                                const { id, content } = currValue;
                                return (
                                    <p key={id}>
                                        {activeTab === id && content}
                                    </p>
                                );
                            })
                        }
                    </div>
                </TabsWrapper>
            </section>
        </>
    );
};

export default Tabs;