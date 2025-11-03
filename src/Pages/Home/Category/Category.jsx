import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div className="mt-12 px-2">
            <SectionTitle title={'Category'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, alias.'}/>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="border p-2 space-y-3 flex justify-center items-center flex-col rounded hover:shadow-2xl">
                    <h3>image</h3>
                    <h2>Name</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;