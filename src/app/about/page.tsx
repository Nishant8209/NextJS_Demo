export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About Us</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We are a passionate team of developers, designers, and strategists working to build meaningful digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Mission</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        To empower businesses with cutting-edge web solutions that drive growth and deliver measurable results.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Values</h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        <li>Innovation</li>
                        <li>Transparency</li>
                        <li>Customer-first approach</li>
                        <li>Continuous learning</li>
                    </ul>
                </div>
            </div>

            
        </div>
    );
}
