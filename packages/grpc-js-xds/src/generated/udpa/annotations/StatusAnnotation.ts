// Original file: deps/xds/udpa/annotations/status.proto

import type { PackageVersionStatus as _udpa_annotations_PackageVersionStatus, PackageVersionStatus__Output as _udpa_annotations_PackageVersionStatus__Output } from '../../udpa/annotations/PackageVersionStatus';

export interface StatusAnnotation {
  /**
   * The entity is work-in-progress and subject to breaking changes.
   */
  'work_in_progress'?: (boolean);
  /**
   * The entity belongs to a package with the given version status.
   */
  'package_version_status'?: (_udpa_annotations_PackageVersionStatus);
}

export interface StatusAnnotation__Output {
  /**
   * The entity is work-in-progress and subject to breaking changes.
   */
  'work_in_progress': (boolean);
  /**
   * The entity belongs to a package with the given version status.
   */
  'package_version_status': (_udpa_annotations_PackageVersionStatus__Output);
}
