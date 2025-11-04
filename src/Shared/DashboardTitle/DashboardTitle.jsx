const DashboardTitle = ({title,subtitle}) => {
    return (
        <div>
            <h1 className="text-xl text-teal-700 font-bold">{title}</h1>
            <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
    );
};
export default DashboardTitle;