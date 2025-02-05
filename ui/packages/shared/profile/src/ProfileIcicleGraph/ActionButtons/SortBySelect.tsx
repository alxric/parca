// Copyright 2022 The Parca Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Select} from '@parca/components';

import {FIELD_CUMULATIVE, FIELD_DIFF, FIELD_FUNCTION_NAME} from '../IcicleGraphArrow';

const SortBySelect = ({
  sortBy,
  setSortBy,
  compareMode,
}: {
  sortBy: string;
  setSortBy: (key: string) => void;
  compareMode: boolean;
}): React.JSX.Element => {
  return (
    <div>
      <label className="text-sm">Sort</label>
      <Select
        id="h-sort-by-filter"
        className="!px-3"
        items={[
          {
            key: FIELD_FUNCTION_NAME,
            disabled: false,
            element: {
              active: <>Function</>,
              expanded: (
                <>
                  <span>Function</span>
                </>
              ),
            },
          },
          {
            key: FIELD_CUMULATIVE,
            disabled: false,
            element: {
              active: <>Cumulative</>,
              expanded: (
                <>
                  <span>Cumulative</span>
                </>
              ),
            },
          },
          {
            key: FIELD_DIFF,
            disabled: !compareMode,
            element: {
              active: <>Diff</>,
              expanded: (
                <>
                  <span>Diff</span>
                </>
              ),
            },
          },
        ]}
        selectedKey={sortBy}
        onSelection={key => setSortBy(key)}
        placeholder={'Sort By'}
        primary={false}
        disabled={false}
      />
    </div>
  );
};

export default SortBySelect;
