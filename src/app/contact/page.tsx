export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Contact Us</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        We'd love to hear from you. Please fill out the form below and we'll get back to you shortly.
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          ></textarea>
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
