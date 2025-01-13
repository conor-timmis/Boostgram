import React from 'react';

const TermsAndConditions: React.FC = () => {
    return (
        <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <div className="terms-content">
                <p>
                    By placing an order with Boostgram, you automatically accept all the terms of service below, whether
                    you have read them or not.
                </p>
                <h2>1. Sales and Refunds</h2>
                <ul>
                    <li>
                        All sales are final. Depositing funds into Boostgram means you agree that refunds will not be issued
                        to the original payment method. Orders that have not been fulfilled may be eligible for site credit.
                    </li>
                    <li>
                        Refunds are not provided based on discrepancies between estimated and actual delivery times. Our
                        delivery estimates are approximations, and actual times may vary.
                    </li>
                </ul>

                <h2>2. Service Changes</h2>
                <ul>
                    <li>
                        Boostgram reserves the right to change these Terms of Service without notice. It is your responsibility
                        to read and stay updated with the terms before placing any orders.
                    </li>
                    <li>
                        We may change our service offerings or rates at any time without prior notice. These terms remain in
                        effect even with rate changes.
                    </li>
                    <li>
                        If necessary, Boostgram reserves the right to alter the service type to complete an order.
                    </li>
                </ul>

                <h2>3. Usage Compliance</h2>
                <ul>
                    <li>
                        You agree to use Boostgram in accordance with the terms of service of the social media platforms you
                        engage with (e.g., Instagram). Ensure you follow all agreements made with these platforms.
                    </li>
                </ul>

                <h2>4. Liability</h2>
                <ul>
                    <li>
                        Boostgram is not responsible for any account bans, penalties, or limitations imposed by social media
                        platforms.
                    </li>
                </ul>

                <p>
                    By continuing to use Boostgram, you agree to these terms. For any questions, feel free to reach out to our
                    support team.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
