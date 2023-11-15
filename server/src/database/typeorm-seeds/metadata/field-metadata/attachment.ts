import { DataSource } from 'typeorm';

import { SeedObjectMetadataIds } from 'src/database/typeorm-seeds/metadata/object-metadata';
import { SeedWorkspaceId } from 'src/database/seeds/metadata';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';

const fieldMetadataTableName = 'fieldMetadata';

export enum SeedAttachmentFieldMetadataIds {
  Id = '20202020-0544-432b-8f96-84c4d6a94d50',
  CreatedAt = '20202020-839b-4cbb-a1be-1a0cb85524a4',
  UpdatedAt = '20202020-7f29-490d-a3e1-9c3015524057',

  Name = '20202020-5683-4c80-8590-255321ece692',
  FullPath = '20202020-bb72-4644-b255-afb4ebb83b66',
  Type = '20202020-8dfa-492f-92d1-56d5fb18cbb7',

  Author = '20202020-7831-43c2-827f-bc78289b7398',
  Activity = '20202020-f5a9-46ec-b39a-eda906f00804',
  Person = '20202020-f67c-4cc5-893c-c6b615527473',
  Company = '20202020-5463-4d03-9124-1775b9b7f955',
}

export const seedAttachmentFieldMetadata = async (
  workspaceDataSource: DataSource,
  schemaName: string,
) => {
  await workspaceDataSource
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.${fieldMetadataTableName}`, [
      'id',
      'objectMetadataId',
      'isCustom',
      'workspaceId',
      'isActive',
      'type',
      'name',
      'label',
      'targetColumnMap',
      'description',
      'icon',
      'isNullable',
    ])
    .orIgnore()
    .values([
      // Default fields
      {
        id: SeedAttachmentFieldMetadataIds.Id,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.UUID,
        name: 'id',
        label: 'Id',
        targetColumnMap: {
          value: 'id',
        },
        description: undefined,
        icon: undefined,
        isNullable: true,
        // isSystem: true,
      },
      {
        id: SeedAttachmentFieldMetadataIds.CreatedAt,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.DATE,
        name: 'createdAt',
        label: 'Creation date',
        targetColumnMap: {
          value: 'createdAt',
        },
        description: undefined,
        icon: 'IconCalendar',
        isNullable: true,
      },
      {
        id: SeedAttachmentFieldMetadataIds.UpdatedAt,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.DATE,
        name: 'updatedAt',
        label: 'Update date',
        targetColumnMap: {
          value: 'updatedAt',
        },
        description: undefined,
        icon: 'IconCalendar',
        isNullable: true,
      },
      // Primary Identifier
      {
        id: SeedAttachmentFieldMetadataIds.Name,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'TEXT',
        name: 'name',
        label: 'Name',
        targetColumnMap: {
          value: 'name',
        },
        description: 'Attachment name',
        icon: 'IconFileUpload',
        isNullable: false,
      },
      // Scalar fields
      {
        id: SeedAttachmentFieldMetadataIds.FullPath,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'TEXT',
        name: 'fullPath',
        label: 'Full path',
        targetColumnMap: {
          value: 'fullPath',
        },
        description: 'Attachment full path',
        icon: 'IconLink',
        isNullable: false,
      },
      {
        id: SeedAttachmentFieldMetadataIds.Type,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'TEXT',
        name: 'type',
        label: 'Type',
        targetColumnMap: {
          value: 'type',
        },
        description: 'Attachment type',
        icon: 'IconList',
        isNullable: false,
      },

      // Relationships
      {
        id: SeedAttachmentFieldMetadataIds.Author,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'RELATION',
        name: 'author',
        label: 'Author',
        targetColumnMap: {
          value: 'authorId',
        },
        description: 'Attachment author',
        icon: 'IconCircleUser',
        isNullable: false,
      },
      {
        id: SeedAttachmentFieldMetadataIds.Activity,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'RELATION',
        name: 'activity',
        label: 'Activity',
        targetColumnMap: {
          value: 'activityId',
        },
        description: 'Attachment activity',
        icon: 'IconNotes',
        isNullable: false,
      },
      {
        id: SeedAttachmentFieldMetadataIds.Person,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'RELATION',
        name: 'person',
        label: 'Person',
        targetColumnMap: {
          value: 'personId',
        },
        description: 'Attachment person',
        icon: 'IconUser',
        isNullable: false,
      },
      {
        id: SeedAttachmentFieldMetadataIds.Company,
        objectMetadataId: SeedObjectMetadataIds.Attachment,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'RELATION',
        name: 'company',
        label: 'Company',
        targetColumnMap: {
          value: 'companyId',
        },
        description: 'Attachment company',
        icon: 'IconBuildingSkyscraper',
        isNullable: false,
      },
    ])
    .execute();
};