const TodoComputed = ({ computedItemLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4 transition-all duration-1000 dark:bg-gray-800">
            <span className="text-gray-400">{computedItemLeft} items left</span>
            <button className="text-gray-400" onClick={clearCompleted}>
                Clean Completed
            </button>
        </section>
    );
};
export default TodoComputed;
