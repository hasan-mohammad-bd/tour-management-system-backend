const { getPackagesServices, createPackagesServices, getPackageDetailsByIdService, updatePackageService, trendingPackageService, cheapestPackageService } = require("../services/package.service")

exports.getPackage = async (req, res, next) =>{
    try {
        let queries = {};
        console.log(req.query)

        //fields
        if(req.query.fields){
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;
        }

        //sorting
        if(req.query.sorts){
            const sorts = req.query.sorts.split(',').join(' ');
            console.log(sorts);
            queries.sorts = sorts;
        }

        //pagination
        if(req.query.page){
           const {page=1, limit=5} = req.query;
           const skip = (page-1)*parseInt(limit);
           queries.skip = skip;
           queries.limit = parseInt(limit)
        }
        const packages = await getPackagesServices(queries);
        res.status(200).json({
            status: 'Success',
            message: 'Data have been loaded successfully',
            data: packages
        })
    } catch (error) {
        res.status(200).json({
            status: 'failed',
            message: 'Failed to load data',
            error: error.message
        })
    }
}

exports.getTrendingPackage = async (req, res, next) =>{
    try {
        const result = await trendingPackageService()
        res.status(200).json({
            status: 'Success',
            message: 'data has been loaded',
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: 'failed',
            message: 'Failed to load the data',
            error: error.message
        })
    }
}

exports.createPackage = async (req, res, next) => {
    try {
        const result = await createPackagesServices(req.body)
        res.status(200).json({
            status: 'Success',
            message: 'Package has been updated',
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: 'failed',
            message: 'Failed to update',
            error: error.message
        })
    }
}
exports.getCheapestPackage = async (req, res, next) => {
    try {
        const result = await cheapestPackageService()
        res.status(200).json({
            status: 'Success',
            message: 'Package has been updated',
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: 'failed',
            message: 'Failed to update',
            error: error.message
        })
    }
}

exports.getPackageDetails = async (req, res, next)=>{
    try {
        console.log(req.params);
        const id = req.params
        const result = await getPackageDetailsByIdService(id)
        res.status(200).json({
            status: 'Success',
            message: 'Data has been loaded successfully',
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: 'failed',
            message: 'Failed to load the data',
            error: error.message
        })
    }
}

exports.updatePackage = async (req, res, next)=>{
    try {
        const id = req.params.id
        console.log(id);
        const result = await updatePackageService(id,req.body)
        res.status(200).json({
            status: 'success',
            message: 'Data has been updated',
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: 'failed',
            message: 'failed to update',
            error: error.message
        })
    }
}