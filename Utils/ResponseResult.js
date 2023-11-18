export const getResponse = async (result) => {
  const responseResult = {
    errorList: null,
    data: null,
    totalCount: 0,
    statusCode: 200,
    success: true,
  };
  if (!result) {
    return {
      ...responseResult,
      errorList: ["Result Gelmedi"],
      statusCode: 400,
      success: false,
    };
  }

  if (!result.success) {
    return {
      ...responseResult,
      errorList: result?.errorList || [result?.message],
      statusCode: result?.statusCode || 400,
      success: false,
    };
  }

  return {
    ...responseResult,
    data: result?.entity ? result.entity : result.entities,
    totalCount: result.totalCount,
    statusCode: 200,
    success: true,
  };
};
