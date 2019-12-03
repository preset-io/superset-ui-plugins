/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable sort-keys */
export default function transformProps(chartProps) {
  const { width, height, formData, queryData, datasource } = chartProps;
  const { colorScheme, metric, secondaryMetric } = formData;

  let returnProps = {
    width,
    height,
    data: queryData.data,
    colorScheme,
    metrics: [metric, secondaryMetric]
  };

  if (chartProps.datasource && chartProps.datasource.metrics) {
    chartProps.datasource.metrics.forEach(metric => {
      if (metric.metric_name == formData.metric && metric.d3format) {
        Object.assign(returnProps, { numberFormat: metric.d3format });
      }
    });
  }
  console.warn("!!!", returnProps);
  return returnProps;
}
