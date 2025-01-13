import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <div className="terms-content">
                <p> By placing an order through our platform, you acknowledge and agree to the following Terms of Service, whether or not you have read them. </p> <p> All sales are final. By depositing funds into Boostgram, you acknowledge that refunds will not be issued under any circumstances to the original payment method. Orders that remain unfulfilled may be eligible for site credit. </p> <p> We reserve the right to amend these Terms of Service at any time, without prior notice. It is your responsibility to review these terms regularly to ensure you are aware of any updates or changes. By using our website, you agree to comply with all applicable agreements and Terms of Service outlined by the respective social media platforms. </p> <p> Our rates are subject to change at any time, and any such changes will remain effective immediately. You agree that these Terms will continue to apply even in the event of rate adjustments. </p> <p> While we strive to provide estimated delivery times for our services, please note that these are approximations and not guarantees. Due to a variety of factors, actual delivery times may differ from the estimated times. As such, we do not provide refunds solely on the basis of discrepancies between estimated and actual delivery times. </p> <p> We are committed to meeting the expectations of our resellers. In cases where it is necessary to complete an order, we reserve the right to modify the type of service provided. Furthermore, please be advised that Boostgram will not be held responsible for any account bans, penalties, or limitations imposed by social media platforms. </p>
                {/* Back to Home button */}
                <button onClick={handleGoBack}>Back to Home</button>
            </div>
        </div >
    );
};

export default TermsAndConditions;
