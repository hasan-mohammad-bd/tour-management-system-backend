const Package = require("../models/Package");

exports.getPackagesServices = async (queries) => {
  const result = await Package.find({})
    .select(queries.fields)
    .skip(queries.skip)
    .limit(queries.limit)
    .sort(queries.shots)
  return result;
};

exports.getPackageDetailsByIdService = async (id) =>{

    const result = await Package.findById({_id: id.id})
    result.viewCount += 1;
    await result.save();
    return result;
};

exports.createPackagesServices = async (data) => {
  const result = await Package.create(data);
  return result;
};


exports.updatePackageService = async (id, data) =>{
    console.log(id, data);
    const result = await Package.updateOne({_id: id}, {$set: data}, {runValidators: true});
    return result;
}

exports.trendingPackageService = async () =>{
    const result = await Package.find({}).sort({viewCount: -1}).limit('3')
    return result
}

exports.cheapestPackageService = async () => {
    const result = await Package.find({}).sort({price: 1}).limit('3');
    return result
}