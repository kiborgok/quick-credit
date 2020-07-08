import React from 'react';
import { withRouter } from 'react-router-dom';

const Terms = () => (
    <>
        <div className="loan-form">
            <header>
                <h1>Terms & conditions</h1>
            </header>
            <div className='form-data'>
                <h1><em>NOTE:</em> QUICK CREDIT DOES NOT OFFER REAL MONEY</h1>
                <h2>Introduction</h2>
                <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Quick Credit accessible at </p>
                <p>Minors or people below 18 years old are not allowed to use this Website.</p>
                <p>Our interest rates stand at 5% of the principal</p>
                <h2>Intellectual Property Rights</h2>
                <p>You are granted limited license only for purposes of viewing the material contained on this Website.</p>
                <h2>Restrictions</h2>
                <p>You are specifically restricted from all of the following:</p>
                <ol style={{ paddingLeft: '15px' }}>
                    <li>publishing any Website material in any other media.</li>
                    <li>selling, otherwise commercializing any Website material;</li>
                    <li>publicly performing and/or showing any Website material;</li>
                    <li>using this Website in any way that is or may be damaging to this Website;</li>
                    <li>using this Website in any way that impacts user access to this Website;</li>
                    <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person;</li>
                    <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
                    <li>using this Website to engage in any advertising or marketing.</li>

                </ol>
                <h2>Variation of Terms</h2>
                <p>Quick Credit is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>
                <h2>Entire agreement</h2>
                <p>These Terms constitute the entire agreement between Quick Credit and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>
            </div>
        </div>
    </>
);

export default withRouter(Terms);