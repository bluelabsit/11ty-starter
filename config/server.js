module.exports = (eleventyConfig) => {
  eleventyConfig.setWatchThrottleWaitTime(process.env.SERVER_WATCH_THROTTLE_WAIT_TIME ?? 0);
};
