// NOTICE: the code in this file originally developed by Microsoft
// original source: https://github.com/AzureAD/azure-activedirectory-library-for-js/blob/master/lib/adal.js#L1625
//----------------------------------------------------------------------
// AdalJS v1.0.17
// @preserve Copyright (c) Microsoft Open Technologies, Inc.
// All Rights Reserved
// Apache License 2.0
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//id
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//----------------------------------------------------------------------

export default function random() {
  const guidHolder = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx";
  const hex = "0123456789abcdef";
  let r = 0;
  let guidResponse = "";

  for (var i = 0; i < guidHolder.length; i++) {
    if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
      // each x and y needs to be random
      r = (Math.random() * 16) | 0;
    }

    if (guidHolder[i] === "x") {
      guidResponse += hex[r];
    } else if (guidHolder[i] === "y") {
      // clock-seq-and-reserved first hex is filtered and remaining hex values are random
      r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
      r |= 0x8; // set pos 3 to 1 as 1???
      guidResponse += hex[r];
    } else {
      guidResponse += guidHolder[i];
    }
  }
  return guidResponse;
}
