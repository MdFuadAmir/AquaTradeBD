

const SectionTitle = ({title,subTitle}) => {
    return (
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-teal-700">{title}</h2>
            <p className="text-sm text-gray-500">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;