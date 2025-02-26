import React, { useState } from 'react';
import { useTranslation } from './LanguageContext';
import { BottomMain } from '../ui/BottonStyle';

const FeedbackBox = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState('');
    const t = useTranslation();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send the `feedback` to your server
        // using an API call or similar method.
        console.log('Feedback submitted:', feedback);
        setIsSubmitted(true);
    };

    return (
        <div className="container mx-auto my-4 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
                {t.feedbackTitle}
            </h3>
            {isSubmitted ? (
                <div className="text-center text-green-600">
                    {t.feedbackSubmitted}
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={t.feedbackPlaceholder}
                        rows="4"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                    <div className="flex justify-center p-4">
                        <BottomMain to="/feedback" text={t.feedbackButton} />
                    </div>
                </form>
            )}
        </div>
    );
};

export default FeedbackBox;