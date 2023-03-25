const TodoFilter = ({ chanceFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-500 hover:text-gray-500"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => chanceFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-500 hover:text-gray-500"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => chanceFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-500 hover:text-gray-500"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => chanceFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};
export default TodoFilter;
