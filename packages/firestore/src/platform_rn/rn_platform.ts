/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserPlatform } from '../platform_browser/browser_platform';
import { base64 } from '@firebase/util';

// Implements the Platform API for ReactNative.
export class ReactNativePlatform extends BrowserPlatform {
  readonly base64Available = true;

  atob(encoded: string): string {
    // WebSafe uses a different URL-encoding safe alphabet that doesn't match
    // the encoding used on the backend.
    return base64.decodeString(encoded, /* webSafe =*/ false);
  }

  btoa(raw: string): string {
    // WebSafe uses a different URL-encoding safe alphabet that doesn't match
    // the encoding used on the backend.
    return base64.encodeString(raw, /* webSafe =*/ false);
  }
}
