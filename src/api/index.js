const axios = require('axios')
const R = require('ramda')
const {BASE_URL} = require('../api/constants')

const mapPaths = R.map(R.prop('path'))
const mapPathsWithNs = R.map(R.prop('path_with_namespace'))
const mapFilePath = R.map(R.prop('path'))

async function getProjects(orgName) {
  try {
    const response = await axios.get(
      `${BASE_URL}/orgs/${orgName}/projects?order_by=name&sort=asc&page=1&per_page=250`,
    )
    return R.compose(
      R.path(['data', 'data']),
    )(response)
  } catch (error) {
    console.log(error)
  }
}

async function getProject(nameWithNs) {
  try {
    const response = await axios.get(
      `${BASE_URL}/projects/${encodeURIComponent(nameWithNs)}`,
    )
    return R.compose(
      R.path(['data']),
    )(response)
  } catch (error) {
    console.log(error)
  }
}

async function getFiles({id}) {
  try {
    const url = `${BASE_URL}/projects/${encodeURIComponent(id)}/files`
    const response = await axios.get(url)
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

async function getFile({id, path, branch}) {
  try {
    const url = `${BASE_URL}/files.export?projectId=${id}&branch=${branch}&path=${path}`
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  mapPathsWithNs,
  mapPaths,
  getProjects,
  getProject,
  getFiles,
  mapFilePath,
  getFile,
}
