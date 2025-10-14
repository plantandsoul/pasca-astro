/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

type AbstractNull = SharedWysiwygTextComponent[];

type AbstractNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type BaseNull = SharedWysiwygTextComponent[];

type BaseNull1 = SharedWysiwygTextComponent[];

type BaseNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type BaseNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

export type CallbackListData = UsersPermissionsUserRegistration;

export type ChangePasswordCreateData = UsersPermissionsUserRegistration;

export interface ChangePasswordCreatePayload {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}

export type CountListData = number;

/** @format int64 */
export type DeleteGlobalData = number;

/** @format int64 */
export type DeleteNavbarItemsIdData = number;

/** @format int64 */
export type DeletePagesIdData = number;

/** @format int64 */
export type DeletePostsIdData = number;

/** @format int64 */
export type DeleteTopicsIdData = number;

type DiscriminatorNull = SharedWysiwygTextComponent[];

type DiscriminatorNull1 = SharedWysiwygTextComponent[];

type DiscriminatorNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

export interface Error {
  data?: object | object[] | null;
  error: {
    details?: object;
    message?: string;
    name?: string;
    status?: number;
  };
}

export type FilesDeleteData = UploadFile;

export type FilesDetailData = UploadFile;

export type FilesListData = UploadFile[];

export interface ForgotPasswordCreateData {
  ok?: true;
}

export interface ForgotPasswordCreatePayload {
  email?: string;
}

export type GetGlobalData = GlobalResponse;

export type GetNavbarItemsData = NavbarItemListResponse;

export type GetNavbarItemsIdData = NavbarItemResponse;

export type GetPagesData = PageListResponse;

export type GetPagesIdData = PageResponse;

export type GetPostsData = PostListResponse;

export type GetPostsIdData = PostResponse;

export type GetTopicsData = TopicListResponse;

export type GetTopicsIdData = TopicResponse;

export type GetUsersData = UsersPermissionsUser;

export interface Global {
  streetAddress1?: string;
  streetAddress2?: string;
  /** @format date-time */
  createdAt?: string;
  createdBy?: {
    documentId?: string;
    id?: number;
  };
  defaultSeo?: SharedSeoComponent;
  documentId?: string;
  favicon?: {
    alternativeText?: string;
    caption?: string;
    /** @format date-time */
    createdAt?: string;
    createdBy?: {
      documentId?: string;
      id?: number;
    };
    documentId?: string;
    ext?: string;
    folder?: {
      children?: {
        documentId?: string;
        id?: number;
      }[];
      /** @format date-time */
      createdAt?: string;
      createdBy?: {
        documentId?: string;
        id?: number;
      };
      documentId?: string;
      files?: {
        alternativeText?: string;
        caption?: string;
        /** @format date-time */
        createdAt?: string;
        createdBy?: {
          blocked?: boolean;
          /** @format date-time */
          createdAt?: string;
          createdBy?: {
            documentId?: string;
            id?: number;
          };
          documentId?: string;
          /** @format email */
          email?: string;
          firstname?: string;
          id?: number;
          isActive?: boolean;
          lastname?: string;
          locale?: string;
          localizations?: {
            documentId?: string;
            id?: number;
          }[];
          preferedLanguage?: string;
          /** @format date-time */
          publishedAt?: string;
          registrationToken?: string;
          resetPasswordToken?: string;
          roles?: {
            code?: string;
            /** @format date-time */
            createdAt?: string;
            createdBy?: {
              documentId?: string;
              id?: number;
            };
            description?: string;
            documentId?: string;
            id?: number;
            locale?: string;
            localizations?: {
              documentId?: string;
              id?: number;
            }[];
            name?: string;
            permissions?: {
              action?: string;
              actionParameters?: any;
              conditions?: any;
              /** @format date-time */
              createdAt?: string;
              createdBy?: {
                documentId?: string;
                id?: number;
              };
              documentId?: string;
              id?: number;
              locale?: string;
              localizations?: {
                documentId?: string;
                id?: number;
              }[];
              properties?: any;
              /** @format date-time */
              publishedAt?: string;
              role?: {
                documentId?: string;
                id?: number;
              };
              subject?: string;
              /** @format date-time */
              updatedAt?: string;
              updatedBy?: {
                documentId?: string;
                id?: number;
              };
            }[];
            /** @format date-time */
            publishedAt?: string;
            /** @format date-time */
            updatedAt?: string;
            updatedBy?: {
              documentId?: string;
              id?: number;
            };
            users?: {
              documentId?: string;
              id?: number;
            }[];
          }[];
          /** @format date-time */
          updatedAt?: string;
          updatedBy?: {
            documentId?: string;
            id?: number;
          };
          username?: string;
        };
        documentId?: string;
        ext?: string;
        folder?: {
          documentId?: string;
          id?: number;
        };
        folderPath?: string;
        formats?: any;
        hash?: string;
        height?: number;
        id?: number;
        locale?: string;
        localizations?: {
          documentId?: string;
          id?: number;
        }[];
        mime?: string;
        name?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        /** @format date-time */
        publishedAt?: string;
        related?: {
          documentId?: string;
          id?: number;
        }[];
        /** @format float */
        size?: number;
        /** @format date-time */
        updatedAt?: string;
        updatedBy?: {
          documentId?: string;
          id?: number;
        };
        url?: string;
        width?: number;
      }[];
      id?: number;
      locale?: string;
      localizations?: {
        documentId?: string;
        id?: number;
      }[];
      name?: string;
      parent?: {
        documentId?: string;
        id?: number;
      };
      path?: string;
      pathId?: number;
      /** @format date-time */
      publishedAt?: string;
      /** @format date-time */
      updatedAt?: string;
      updatedBy?: {
        documentId?: string;
        id?: number;
      };
    };
    folderPath?: string;
    formats?: any;
    hash?: string;
    height?: number;
    id?: number;
    locale?: string;
    localizations?: {
      documentId?: string;
      id?: number;
    }[];
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    /** @format date-time */
    publishedAt?: string;
    related?: {
      documentId?: string;
      id?: number;
    }[];
    /** @format float */
    size?: number;
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: {
      documentId?: string;
      id?: number;
    };
    url?: string;
    width?: number;
  };
  id?: number;
  locale?: string;
  localizations?: {
    streetAddress1?: string;
    streetAddress2?: string;
    /** @format date-time */
    createdAt?: string;
    createdBy?: {
      documentId?: string;
      id?: number;
    };
    defaultSeo?: SharedSeoComponent;
    documentId?: string;
    favicon?: {
      alternativeText?: string;
      caption?: string;
      /** @format date-time */
      createdAt?: string;
      createdBy?: {
        documentId?: string;
        id?: number;
      };
      documentId?: string;
      ext?: string;
      folder?: {
        documentId?: string;
        id?: number;
      };
      folderPath?: string;
      formats?: any;
      hash?: string;
      height?: number;
      id?: number;
      locale?: string;
      localizations?: {
        documentId?: string;
        id?: number;
      }[];
      mime?: string;
      name?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      /** @format date-time */
      publishedAt?: string;
      related?: {
        documentId?: string;
        id?: number;
      }[];
      /** @format float */
      size?: number;
      /** @format date-time */
      updatedAt?: string;
      updatedBy?: {
        documentId?: string;
        id?: number;
      };
      url?: string;
      width?: number;
    };
    id?: number;
    locale?: string;
    localizations?: {
      documentId?: string;
      id?: number;
    }[];
    /** @format date-time */
    publishedAt?: string;
    siteDescription?: string;
    siteName?: string;
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: {
      documentId?: string;
      id?: number;
    };
  }[];
  /** @format date-time */
  publishedAt?: string;
  siteDescription: string;
  siteName: string;
  /** @format date-time */
  updatedAt?: string;
  updatedBy?: {
    documentId?: string;
    id?: number;
  };
}

export interface GlobalListResponse {
  data?: Global[];
  meta?: {
    pagination?: {
      page?: number;
      /** @max 1 */
      pageCount?: number;
      /** @min 25 */
      pageSize?: number;
      total?: number;
    };
  };
}

export interface GlobalRequest {
  data: {
    streetAddress1?: string;
    streetAddress2?: string;
    defaultSeo?: SharedSeoComponent;
    /** @example "string or id" */
    favicon?: number | string;
    locale?: string;
    localizations?: (number | string)[];
    siteDescription: string;
    siteName: string;
  };
}

export interface GlobalResponse {
  data?: Global;
  meta?: object;
}

type InternalNull = SharedWysiwygTextComponent[];

type InternalNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

export type LocalCreateData = UsersPermissionsUserRegistration;

export interface LocalCreatePayload {
  identifier?: string;
  password?: string;
}

export type LocalRegisterCreateData = UsersPermissionsUserRegistration;

export interface LocalRegisterCreatePayload {
  email?: string;
  password?: string;
  username?: string;
}

export interface NavbarItem {
  child_navbar_items?: {
    documentId?: string;
    id?: number;
  }[];
  /** @format date-time */
  createdAt?: string;
  createdBy?: {
    documentId?: string;
    id?: number;
  };
  documentId?: string;
  external_url?: string;
  id?: number;
  internal_url?: string;
  label: string;
  locale?: string;
  localizations?: {
    documentId?: string;
    id?: number;
  }[];
  parent_navbar_item?: {
    child_navbar_items?: {
      documentId?: string;
      id?: number;
    }[];
    /** @format date-time */
    createdAt?: string;
    createdBy?: {
      blocked?: boolean;
      /** @format date-time */
      createdAt?: string;
      createdBy?: {
        documentId?: string;
        id?: number;
      };
      documentId?: string;
      /** @format email */
      email?: string;
      firstname?: string;
      id?: number;
      isActive?: boolean;
      lastname?: string;
      locale?: string;
      localizations?: {
        documentId?: string;
        id?: number;
      }[];
      preferedLanguage?: string;
      /** @format date-time */
      publishedAt?: string;
      registrationToken?: string;
      resetPasswordToken?: string;
      roles?: {
        code?: string;
        /** @format date-time */
        createdAt?: string;
        createdBy?: {
          documentId?: string;
          id?: number;
        };
        description?: string;
        documentId?: string;
        id?: number;
        locale?: string;
        localizations?: {
          documentId?: string;
          id?: number;
        }[];
        name?: string;
        permissions?: {
          action?: string;
          actionParameters?: any;
          conditions?: any;
          /** @format date-time */
          createdAt?: string;
          createdBy?: {
            documentId?: string;
            id?: number;
          };
          documentId?: string;
          id?: number;
          locale?: string;
          localizations?: {
            documentId?: string;
            id?: number;
          }[];
          properties?: any;
          /** @format date-time */
          publishedAt?: string;
          role?: {
            documentId?: string;
            id?: number;
          };
          subject?: string;
          /** @format date-time */
          updatedAt?: string;
          updatedBy?: {
            documentId?: string;
            id?: number;
          };
        }[];
        /** @format date-time */
        publishedAt?: string;
        /** @format date-time */
        updatedAt?: string;
        updatedBy?: {
          documentId?: string;
          id?: number;
        };
        users?: {
          documentId?: string;
          id?: number;
        }[];
      }[];
      /** @format date-time */
      updatedAt?: string;
      updatedBy?: {
        documentId?: string;
        id?: number;
      };
      username?: string;
    };
    documentId?: string;
    external_url?: string;
    id?: number;
    internal_url?: string;
    label?: string;
    locale?: string;
    localizations?: {
      documentId?: string;
      id?: number;
    }[];
    parent_navbar_item?: {
      documentId?: string;
      id?: number;
    };
    /** @format date-time */
    publishedAt?: string;
    sort_weight?: number;
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: {
      documentId?: string;
      id?: number;
    };
  };
  /** @format date-time */
  publishedAt?: string;
  sort_weight?: number;
  /** @format date-time */
  updatedAt?: string;
  updatedBy?: {
    documentId?: string;
    id?: number;
  };
}

export interface NavbarItemListResponse {
  data?: NavbarItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @max 1 */
      pageCount?: number;
      /** @min 25 */
      pageSize?: number;
      total?: number;
    };
  };
}

export interface NavbarItemRequest {
  data: {
    child_navbar_items?: (number | string)[];
    external_url?: string;
    internal_url?: string;
    label: string;
    locale?: string;
    localizations?: (number | string)[];
    /** @example "string or id" */
    parent_navbar_item?: number | string;
    sort_weight?: number;
  };
}

export interface NavbarItemResponse {
  data?: NavbarItem;
  meta?: object;
}

export interface Page {
  blocks?: AbstractNull &
    AbstractNullComponentMapping<
      "shared.wysiwyg-text",
      SharedWysiwygTextComponent
    >;
  /** @format date-time */
  createdAt?: string;
  createdBy?: {
    blocked?: boolean;
    /** @format date-time */
    createdAt?: string;
    createdBy?: {
      documentId?: string;
      id?: number;
    };
    documentId?: string;
    /** @format email */
    email?: string;
    firstname?: string;
    id?: number;
    isActive?: boolean;
    lastname?: string;
    locale?: string;
    localizations?: {
      documentId?: string;
      id?: number;
    }[];
    preferedLanguage?: string;
    /** @format date-time */
    publishedAt?: string;
    registrationToken?: string;
    resetPasswordToken?: string;
    roles?: {
      code?: string;
      /** @format date-time */
      createdAt?: string;
      createdBy?: {
        documentId?: string;
        id?: number;
      };
      description?: string;
      documentId?: string;
      id?: number;
      locale?: string;
      localizations?: {
        documentId?: string;
        id?: number;
      }[];
      name?: string;
      permissions?: {
        action?: string;
        actionParameters?: any;
        conditions?: any;
        /** @format date-time */
        createdAt?: string;
        createdBy?: {
          documentId?: string;
          id?: number;
        };
        documentId?: string;
        id?: number;
        locale?: string;
        localizations?: {
          documentId?: string;
          id?: number;
        }[];
        properties?: any;
        /** @format date-time */
        publishedAt?: string;
        role?: {
          documentId?: string;
          id?: number;
        };
        subject?: string;
        /** @format date-time */
        updatedAt?: string;
        updatedBy?: {
          documentId?: string;
          id?: number;
        };
      }[];
      /** @format date-time */
      publishedAt?: string;
      /** @format date-time */
      updatedAt?: string;
      updatedBy?: {
        documentId?: string;
        id?: number;
      };
      users?: {
        documentId?: string;
        id?: number;
      }[];
    }[];
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: {
      documentId?: string;
      id?: number;
    };
    username?: string;
  };
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: {
    blocks?: DiscriminatorNull &
      DiscriminatorNullComponentMapping<
        "shared.wysiwyg-text",
        SharedWysiwygTextComponent
      >;
    /** @format date-time */
    createdAt?: string;
    createdBy?: {
      documentId?: string;
      id?: number;
    };
    documentId?: string;
    id?: number;
    locale?: string;
    localizations?: {
      documentId?: string;
      id?: number;
    }[];
    /** @format date-time */
    publishedAt?: string;
    slug?: string;
    title?: string;
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: {
      documentId?: string;
      id?: number;
    };
  }[];
  /** @format date-time */
  publishedAt?: string;
  slug: string;
  title: string;
  /** @format date-time */
  updatedAt?: string;
  updatedBy?: {
    documentId?: string;
    id?: number;
  };
}

export interface PageListResponse {
  data?: Page[];
  meta?: {
    pagination?: {
      page?: number;
      /** @max 1 */
      pageCount?: number;
      /** @min 25 */
      pageSize?: number;
      total?: number;
    };
  };
}

export interface PageRequest {
  data: {
    blocks?: BaseNull &
      BaseNullComponentMapping<
        "shared.wysiwyg-text",
        SharedWysiwygTextComponent
      >;
    locale?: string;
    localizations?: (number | string)[];
    slug: string;
    title: string;
  };
}

export interface PageResponse {
  data?: Page;
  meta?: object;
}

export interface PermissionsListData {
  permissions?: UsersPermissionsPermissionsTree;
}

type PolymorphNull = SharedWysiwygTextComponent[];

type PolymorphNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

export interface Post {
  blocks?: PolymorphNull &
    PolymorphNullComponentMapping<
      "shared.wysiwyg-text",
      SharedWysiwygTextComponent
    >;
  /** @format date-time */
  createdAt?: string;
  createdBy?: {
    documentId?: string;
    id?: number;
  };
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: {
    documentId?: string;
    id?: number;
  }[];
  /** @format date-time */
  publishedAt?: string;
  slug: string;
  summary?: string;
  title: string;
  topics?: {
    /** @format date-time */
    createdAt?: string;
    createdBy?: {
      documentId?: string;
      id?: number;
    };
    documentId?: string;
    id?: number;
    locale?: string;
    localizations?: {
      documentId?: string;
      id?: number;
    }[];
    posts?: {
      blocks?: DiscriminatorNull1 &
        DiscriminatorNull1ComponentMapping<
          "shared.wysiwyg-text",
          SharedWysiwygTextComponent
        >;
      /** @format date-time */
      createdAt?: string;
      createdBy?: {
        blocked?: boolean;
        /** @format date-time */
        createdAt?: string;
        createdBy?: {
          documentId?: string;
          id?: number;
        };
        documentId?: string;
        /** @format email */
        email?: string;
        firstname?: string;
        id?: number;
        isActive?: boolean;
        lastname?: string;
        locale?: string;
        localizations?: {
          documentId?: string;
          id?: number;
        }[];
        preferedLanguage?: string;
        /** @format date-time */
        publishedAt?: string;
        registrationToken?: string;
        resetPasswordToken?: string;
        roles?: {
          code?: string;
          /** @format date-time */
          createdAt?: string;
          createdBy?: {
            documentId?: string;
            id?: number;
          };
          description?: string;
          documentId?: string;
          id?: number;
          locale?: string;
          localizations?: {
            documentId?: string;
            id?: number;
          }[];
          name?: string;
          permissions?: {
            action?: string;
            actionParameters?: any;
            conditions?: any;
            /** @format date-time */
            createdAt?: string;
            createdBy?: {
              documentId?: string;
              id?: number;
            };
            documentId?: string;
            id?: number;
            locale?: string;
            localizations?: {
              documentId?: string;
              id?: number;
            }[];
            properties?: any;
            /** @format date-time */
            publishedAt?: string;
            role?: {
              documentId?: string;
              id?: number;
            };
            subject?: string;
            /** @format date-time */
            updatedAt?: string;
            updatedBy?: {
              documentId?: string;
              id?: number;
            };
          }[];
          /** @format date-time */
          publishedAt?: string;
          /** @format date-time */
          updatedAt?: string;
          updatedBy?: {
            documentId?: string;
            id?: number;
          };
          users?: {
            documentId?: string;
            id?: number;
          }[];
        }[];
        /** @format date-time */
        updatedAt?: string;
        updatedBy?: {
          documentId?: string;
          id?: number;
        };
        username?: string;
      };
      documentId?: string;
      id?: number;
      locale?: string;
      localizations?: {
        documentId?: string;
        id?: number;
      }[];
      /** @format date-time */
      publishedAt?: string;
      slug?: string;
      summary?: string;
      title?: string;
      topics?: {
        documentId?: string;
        id?: number;
      }[];
      /** @format date-time */
      updatedAt?: string;
      updatedBy?: {
        documentId?: string;
        id?: number;
      };
    }[];
    /** @format date-time */
    publishedAt?: string;
    slug?: string;
    title?: string;
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: {
      documentId?: string;
      id?: number;
    };
  }[];
  /** @format date-time */
  updatedAt?: string;
  updatedBy?: {
    documentId?: string;
    id?: number;
  };
}

export interface PostListResponse {
  data?: Post[];
  meta?: {
    pagination?: {
      page?: number;
      /** @max 1 */
      pageCount?: number;
      /** @min 25 */
      pageSize?: number;
      total?: number;
    };
  };
}

export type PostNavbarItemsData = NavbarItemResponse;

export type PostPagesData = PageResponse;

export type PostPostsData = PostResponse;

export interface PostRequest {
  data: {
    blocks?: InternalNull &
      InternalNullComponentMapping<
        "shared.wysiwyg-text",
        SharedWysiwygTextComponent
      >;
    locale?: string;
    localizations?: (number | string)[];
    slug: string;
    summary?: string;
    title: string;
    topics?: (number | string)[];
  };
}

export interface PostResponse {
  data?: Post;
  meta?: object;
}

export type PostTopicsData = TopicResponse;

export type PutGlobalData = GlobalResponse;

export type PutNavbarItemsIdData = NavbarItemResponse;

export type PutPagesIdData = PageResponse;

export type PutPostsIdData = PostResponse;

export type PutTopicsIdData = TopicResponse;

export type ResetPasswordCreateData = UsersPermissionsUserRegistration;

export interface ResetPasswordCreatePayload {
  code?: string;
  password?: string;
  passwordConfirmation?: string;
}

export interface RolesCreateData {
  ok?: true;
}

export interface RolesDeleteData {
  ok?: true;
}

export interface RolesDetailData {
  role?: UsersPermissionsRole;
}

export interface RolesListData {
  roles?: (UsersPermissionsRole & {
    nb_users?: number;
  })[];
}

export interface RolesUpdateData {
  ok?: true;
}

export interface SendEmailConfirmationCreateData {
  email?: string;
  sent?: true;
}

export interface SendEmailConfirmationCreatePayload {
  email?: string;
}

export interface SharedSeoComponent {
  id?: number;
  metaDescription?: string;
  metaTitle?: string;
  shareImage?: {
    alternativeText?: string;
    caption?: string;
    /** @format date-time */
    createdAt?: string;
    createdBy?: {
      documentId?: string;
      id?: number;
    };
    documentId?: string;
    ext?: string;
    folder?: {
      documentId?: string;
      id?: number;
    };
    folderPath?: string;
    formats?: any;
    hash?: string;
    height?: number;
    id?: number;
    locale?: string;
    localizations?: {
      documentId?: string;
      id?: number;
    }[];
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    /** @format date-time */
    publishedAt?: string;
    related?: {
      documentId?: string;
      id?: number;
    }[];
    /** @format float */
    size?: number;
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: {
      documentId?: string;
      id?: number;
    };
    url?: string;
    width?: number;
  };
}

export interface SharedWysiwygTextComponent {
  __component?: "shared.wysiwyg-text";
  body?: string;
  id?: number;
}

export interface Topic {
  /** @format date-time */
  createdAt?: string;
  createdBy?: {
    documentId?: string;
    id?: number;
  };
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: {
    documentId?: string;
    id?: number;
  }[];
  posts?: {
    blocks?: BaseNull1 &
      BaseNull1ComponentMapping<
        "shared.wysiwyg-text",
        SharedWysiwygTextComponent
      >;
    /** @format date-time */
    createdAt?: string;
    createdBy?: {
      documentId?: string;
      id?: number;
    };
    documentId?: string;
    id?: number;
    locale?: string;
    localizations?: {
      documentId?: string;
      id?: number;
    }[];
    /** @format date-time */
    publishedAt?: string;
    slug?: string;
    summary?: string;
    title?: string;
    topics?: {
      /** @format date-time */
      createdAt?: string;
      createdBy?: {
        blocked?: boolean;
        /** @format date-time */
        createdAt?: string;
        createdBy?: {
          documentId?: string;
          id?: number;
        };
        documentId?: string;
        /** @format email */
        email?: string;
        firstname?: string;
        id?: number;
        isActive?: boolean;
        lastname?: string;
        locale?: string;
        localizations?: {
          documentId?: string;
          id?: number;
        }[];
        preferedLanguage?: string;
        /** @format date-time */
        publishedAt?: string;
        registrationToken?: string;
        resetPasswordToken?: string;
        roles?: {
          code?: string;
          /** @format date-time */
          createdAt?: string;
          createdBy?: {
            documentId?: string;
            id?: number;
          };
          description?: string;
          documentId?: string;
          id?: number;
          locale?: string;
          localizations?: {
            documentId?: string;
            id?: number;
          }[];
          name?: string;
          permissions?: {
            action?: string;
            actionParameters?: any;
            conditions?: any;
            /** @format date-time */
            createdAt?: string;
            createdBy?: {
              documentId?: string;
              id?: number;
            };
            documentId?: string;
            id?: number;
            locale?: string;
            localizations?: {
              documentId?: string;
              id?: number;
            }[];
            properties?: any;
            /** @format date-time */
            publishedAt?: string;
            role?: {
              documentId?: string;
              id?: number;
            };
            subject?: string;
            /** @format date-time */
            updatedAt?: string;
            updatedBy?: {
              documentId?: string;
              id?: number;
            };
          }[];
          /** @format date-time */
          publishedAt?: string;
          /** @format date-time */
          updatedAt?: string;
          updatedBy?: {
            documentId?: string;
            id?: number;
          };
          users?: {
            documentId?: string;
            id?: number;
          }[];
        }[];
        /** @format date-time */
        updatedAt?: string;
        updatedBy?: {
          documentId?: string;
          id?: number;
        };
        username?: string;
      };
      documentId?: string;
      id?: number;
      locale?: string;
      localizations?: {
        documentId?: string;
        id?: number;
      }[];
      posts?: {
        documentId?: string;
        id?: number;
      }[];
      /** @format date-time */
      publishedAt?: string;
      slug?: string;
      title?: string;
      /** @format date-time */
      updatedAt?: string;
      updatedBy?: {
        documentId?: string;
        id?: number;
      };
    }[];
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: {
      documentId?: string;
      id?: number;
    };
  }[];
  /** @format date-time */
  publishedAt?: string;
  slug: string;
  title: string;
  /** @format date-time */
  updatedAt?: string;
  updatedBy?: {
    documentId?: string;
    id?: number;
  };
}

export interface TopicListResponse {
  data?: Topic[];
  meta?: {
    pagination?: {
      page?: number;
      /** @max 1 */
      pageCount?: number;
      /** @min 25 */
      pageSize?: number;
      total?: number;
    };
  };
}

export interface TopicRequest {
  data: {
    locale?: string;
    localizations?: (number | string)[];
    posts?: (number | string)[];
    slug: string;
    title: string;
  };
}

export interface TopicResponse {
  data?: Topic;
  meta?: object;
}

export type UploadCreateData = UploadFile[];

/** Upload files */
export interface UploadCreatePayload {
  /** The field of the entry which the file(s) will be precisely linked to. */
  field?: string;
  files: File[];
  /** The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). */
  path?: string;
  /** The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). */
  ref?: string;
  /** The ID of the entry which the file(s) will be linked to */
  refId?: string;
}

export interface UploadFile {
  alternativeText?: string;
  caption?: string;
  /** @format date-time */
  createdAt?: string;
  ext?: string;
  formats?: number;
  hash?: string;
  /** @format integer */
  height?: number;
  id?: number;
  mime?: string;
  name?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: object;
  /** @format double */
  size?: number;
  /** @format date-time */
  updatedAt?: string;
  url?: string;
  /** @format integer */
  width?: number;
}

export type UploadIdCreateData = UploadFile[];

/** Upload files */
export interface UploadIdCreatePayload {
  fileInfo?: {
    alternativeText?: string;
    caption?: string;
    name?: string;
  };
  /** @format binary */
  files?: File;
}

export type UsersCreateData = UsersPermissionsUser & {
  role?: UsersPermissionsRole;
};

export interface UsersCreatePayload {
  email: string;
  password: string;
  username: string;
}

export type UsersDeleteData = UsersPermissionsUser;

export type UsersDetailData = UsersPermissionsUser;

export type UsersListData = UsersPermissionsUser[];

export type UsersPermissionsPermissionsTree = Record<
  string,
  {
    /** every controller of the api */
    controllers?: Record<
      string,
      Record<
        string,
        {
          enabled?: boolean;
          policy?: string;
        }
      >
    >;
  }
>;

export interface UsersPermissionsRole {
  /** @format date-time */
  createdAt?: string;
  description?: string;
  id?: number;
  name?: string;
  type?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsUser {
  /** @example false */
  blocked?: boolean;
  /** @example true */
  confirmed?: boolean;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.258Z"
   */
  createdAt?: string;
  /** @example "foo.bar@strapi.io" */
  email?: string;
  /** @example 1 */
  id?: number;
  /** @example "local" */
  provider?: string;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.267Z"
   */
  updatedAt?: string;
  /** @example "foo.bar" */
  username?: string;
}

export interface UsersPermissionsUserRegistration {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
  jwt?: string;
  user?: UsersPermissionsUser;
}

export type UsersUpdateData = UsersPermissionsUser & {
  role?: UsersPermissionsRole;
};

export interface UsersUpdatePayload {
  email: string;
  password: string;
  username: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:1337/api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title DOCUMENTATION
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService YOUR_TERMS_OF_SERVICE_URL
 * @baseUrl http://localhost:1337/api
 * @externalDocs https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
 * @contact TEAM <contact-email@something.io> (mywebsite.io)
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  global = {
    /**
     * No description
     *
     * @tags Global
     * @name DeleteGlobal
     * @request DELETE:/global
     * @secure
     * @response `200` `DeleteGlobalData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    deleteGlobal: (params: RequestParams = {}) =>
      this.request<DeleteGlobalData, Error>({
        path: `/global`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Global
     * @name GetGlobal
     * @request GET:/global
     * @secure
     * @response `200` `GetGlobalData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    getGlobal: (
      query?: {
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Filters to apply */
        filters?: Record<string, any>;
        /** Locale to apply */
        locale?: string;
        /** Relations to return */
        populate?: string;
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetGlobalData, Error>({
        path: `/global`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Global
     * @name PutGlobal
     * @request PUT:/global
     * @secure
     * @response `200` `PutGlobalData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    putGlobal: (data: GlobalRequest, params: RequestParams = {}) =>
      this.request<PutGlobalData, Error>({
        path: `/global`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  navbarItems = {
    /**
     * No description
     *
     * @tags Navbar-item
     * @name DeleteNavbarItemsId
     * @request DELETE:/navbar-items/{id}
     * @secure
     * @response `200` `DeleteNavbarItemsIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    deleteNavbarItemsId: (id: number, params: RequestParams = {}) =>
      this.request<DeleteNavbarItemsIdData, Error>({
        path: `/navbar-items/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Navbar-item
     * @name GetNavbarItems
     * @request GET:/navbar-items
     * @secure
     * @response `200` `GetNavbarItemsData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    getNavbarItems: (
      query?: {
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Filters to apply */
        filters?: Record<string, any>;
        /** Locale to apply */
        locale?: string;
        /** Relations to return */
        populate?: string;
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetNavbarItemsData, Error>({
        path: `/navbar-items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Navbar-item
     * @name GetNavbarItemsId
     * @request GET:/navbar-items/{id}
     * @secure
     * @response `200` `GetNavbarItemsIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    getNavbarItemsId: (id: number, params: RequestParams = {}) =>
      this.request<GetNavbarItemsIdData, Error>({
        path: `/navbar-items/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Navbar-item
     * @name PostNavbarItems
     * @request POST:/navbar-items
     * @secure
     * @response `200` `PostNavbarItemsData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    postNavbarItems: (data: NavbarItemRequest, params: RequestParams = {}) =>
      this.request<PostNavbarItemsData, Error>({
        path: `/navbar-items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Navbar-item
     * @name PutNavbarItemsId
     * @request PUT:/navbar-items/{id}
     * @secure
     * @response `200` `PutNavbarItemsIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    putNavbarItemsId: (
      id: number,
      data: NavbarItemRequest,
      params: RequestParams = {},
    ) =>
      this.request<PutNavbarItemsIdData, Error>({
        path: `/navbar-items/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  pages = {
    /**
     * No description
     *
     * @tags Page
     * @name DeletePagesId
     * @request DELETE:/pages/{id}
     * @secure
     * @response `200` `DeletePagesIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    deletePagesId: (id: number, params: RequestParams = {}) =>
      this.request<DeletePagesIdData, Error>({
        path: `/pages/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page
     * @name GetPages
     * @request GET:/pages
     * @secure
     * @response `200` `GetPagesData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    getPages: (
      query?: {
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Filters to apply */
        filters?: Record<string, any>;
        /** Locale to apply */
        locale?: string;
        /** Relations to return */
        populate?: string;
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPagesData, Error>({
        path: `/pages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page
     * @name GetPagesId
     * @request GET:/pages/{id}
     * @secure
     * @response `200` `GetPagesIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    getPagesId: (id: number, params: RequestParams = {}) =>
      this.request<GetPagesIdData, Error>({
        path: `/pages/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page
     * @name PostPages
     * @request POST:/pages
     * @secure
     * @response `200` `PostPagesData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    postPages: (data: PageRequest, params: RequestParams = {}) =>
      this.request<PostPagesData, Error>({
        path: `/pages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page
     * @name PutPagesId
     * @request PUT:/pages/{id}
     * @secure
     * @response `200` `PutPagesIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    putPagesId: (id: number, data: PageRequest, params: RequestParams = {}) =>
      this.request<PutPagesIdData, Error>({
        path: `/pages/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  posts = {
    /**
     * No description
     *
     * @tags Post
     * @name DeletePostsId
     * @request DELETE:/posts/{id}
     * @secure
     * @response `200` `DeletePostsIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    deletePostsId: (id: number, params: RequestParams = {}) =>
      this.request<DeletePostsIdData, Error>({
        path: `/posts/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Post
     * @name GetPosts
     * @request GET:/posts
     * @secure
     * @response `200` `GetPostsData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    getPosts: (
      query?: {
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Filters to apply */
        filters?: Record<string, any>;
        /** Locale to apply */
        locale?: string;
        /** Relations to return */
        populate?: string;
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPostsData, Error>({
        path: `/posts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Post
     * @name GetPostsId
     * @request GET:/posts/{id}
     * @secure
     * @response `200` `GetPostsIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    getPostsId: (id: number, params: RequestParams = {}) =>
      this.request<GetPostsIdData, Error>({
        path: `/posts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Post
     * @name PostPosts
     * @request POST:/posts
     * @secure
     * @response `200` `PostPostsData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    postPosts: (data: PostRequest, params: RequestParams = {}) =>
      this.request<PostPostsData, Error>({
        path: `/posts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Post
     * @name PutPostsId
     * @request PUT:/posts/{id}
     * @secure
     * @response `200` `PutPostsIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    putPostsId: (id: number, data: PostRequest, params: RequestParams = {}) =>
      this.request<PutPostsIdData, Error>({
        path: `/posts/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  topics = {
    /**
     * No description
     *
     * @tags Topic
     * @name DeleteTopicsId
     * @request DELETE:/topics/{id}
     * @secure
     * @response `200` `DeleteTopicsIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    deleteTopicsId: (id: number, params: RequestParams = {}) =>
      this.request<DeleteTopicsIdData, Error>({
        path: `/topics/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topic
     * @name GetTopics
     * @request GET:/topics
     * @secure
     * @response `200` `GetTopicsData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    getTopics: (
      query?: {
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Filters to apply */
        filters?: Record<string, any>;
        /** Locale to apply */
        locale?: string;
        /** Relations to return */
        populate?: string;
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTopicsData, Error>({
        path: `/topics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topic
     * @name GetTopicsId
     * @request GET:/topics/{id}
     * @secure
     * @response `200` `GetTopicsIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    getTopicsId: (id: number, params: RequestParams = {}) =>
      this.request<GetTopicsIdData, Error>({
        path: `/topics/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topic
     * @name PostTopics
     * @request POST:/topics
     * @secure
     * @response `200` `PostTopicsData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    postTopics: (data: TopicRequest, params: RequestParams = {}) =>
      this.request<PostTopicsData, Error>({
        path: `/topics`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topic
     * @name PutTopicsId
     * @request PUT:/topics/{id}
     * @secure
     * @response `200` `PutTopicsIdData` OK
     * @response `400` `Error` Bad Request
     * @response `401` `Error` Unauthorized
     * @response `403` `Error` Forbidden
     * @response `404` `Error` Not Found
     * @response `500` `Error` Internal Server Error
     */
    putTopicsId: (id: number, data: TopicRequest, params: RequestParams = {}) =>
      this.request<PutTopicsIdData, Error>({
        path: `/topics/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesDelete
     * @request DELETE:/upload/files/{id}
     * @secure
     * @response `200` `FilesDeleteData` Delete a file
     */
    filesDelete: (id: string, params: RequestParams = {}) =>
      this.request<FilesDeleteData, any>({
        path: `/upload/files/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesDetail
     * @request GET:/upload/files/{id}
     * @secure
     * @response `200` `FilesDetailData` Get a specific file
     */
    filesDetail: (id: string, params: RequestParams = {}) =>
      this.request<FilesDetailData, any>({
        path: `/upload/files/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesList
     * @request GET:/upload/files
     * @secure
     * @response `200` `FilesListData` Get a list of files
     */
    filesList: (params: RequestParams = {}) =>
      this.request<FilesListData, any>({
        path: `/upload/files`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Upload files
     *
     * @tags Upload - File
     * @name UploadCreate
     * @request POST:/upload
     * @secure
     * @response `200` `UploadCreateData` response
     */
    uploadCreate: (data: UploadCreatePayload, params: RequestParams = {}) =>
      this.request<UploadCreateData, any>({
        path: `/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  uploadIdId = {
    /**
     * @description Upload file information
     *
     * @tags Upload - File
     * @name UploadIdCreate
     * @request POST:/upload?id={id}
     * @secure
     * @response `200` `UploadIdCreateData` response
     */
    uploadIdCreate: (
      id: string,
      query: {
        /** File id */
        id: string;
      },
      data: UploadIdCreatePayload,
      params: RequestParams = {},
    ) =>
      this.request<UploadIdCreateData, any>({
        path: `/upload?id=${id}`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  connect = {
    /**
     * @description Redirects to provider login before being redirect to /auth/{provider}/callback
     *
     * @tags Users-Permissions - Auth
     * @name ConnectDetail
     * @summary Login with a provider
     * @request GET:/connect/{provider}
     * @secure
     * @response `301` `void` Redirect response
     * @response `default` `Error` Error
     */
    connectDetail: (provider: string, params: RequestParams = {}) =>
      this.request<any, void | Error>({
        path: `/connect/${provider}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name CallbackList
     * @summary Default Callback from provider auth
     * @request GET:/auth/{provider}/callback
     * @secure
     * @response `200` `CallbackListData` Returns a jwt token and user info
     * @response `default` `Error` Error
     */
    callbackList: (provider: string, params: RequestParams = {}) =>
      this.request<CallbackListData, Error>({
        path: `/auth/${provider}/callback`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ChangePasswordCreate
     * @summary Update user's own password
     * @request POST:/auth/change-password
     * @secure
     * @response `200` `ChangePasswordCreateData` Returns a jwt token and user info
     * @response `default` `Error` Error
     */
    changePasswordCreate: (
      data: ChangePasswordCreatePayload,
      params: RequestParams = {},
    ) =>
      this.request<ChangePasswordCreateData, Error>({
        path: `/auth/change-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name EmailConfirmationList
     * @summary Confirm user email
     * @request GET:/auth/email-confirmation
     * @secure
     * @response `301` `void` Redirects to the configure email confirmation redirect url
     * @response `default` `Error` Error
     */
    emailConfirmationList: (
      query?: {
        /** confirmation token received by email */
        confirmation?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | Error>({
        path: `/auth/email-confirmation`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ForgotPasswordCreate
     * @summary Send rest password email
     * @request POST:/auth/forgot-password
     * @secure
     * @response `200` `ForgotPasswordCreateData` Returns ok
     * @response `default` `Error` Error
     */
    forgotPasswordCreate: (
      data: ForgotPasswordCreatePayload,
      params: RequestParams = {},
    ) =>
      this.request<ForgotPasswordCreateData, Error>({
        path: `/auth/forgot-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalCreate
     * @summary Local login
     * @request POST:/auth/local
     * @secure
     * @response `200` `LocalCreateData` Connection
     * @response `default` `Error` Error
     */
    localCreate: (data: LocalCreatePayload, params: RequestParams = {}) =>
      this.request<LocalCreateData, Error>({
        path: `/auth/local`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalRegisterCreate
     * @summary Register a user
     * @request POST:/auth/local/register
     * @secure
     * @response `200` `LocalRegisterCreateData` Successful registration
     * @response `default` `Error` Error
     */
    localRegisterCreate: (
      data: LocalRegisterCreatePayload,
      params: RequestParams = {},
    ) =>
      this.request<LocalRegisterCreateData, Error>({
        path: `/auth/local/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ResetPasswordCreate
     * @summary Rest user password
     * @request POST:/auth/reset-password
     * @secure
     * @response `200` `ResetPasswordCreateData` Returns a jwt token and user info
     * @response `default` `Error` Error
     */
    resetPasswordCreate: (
      data: ResetPasswordCreatePayload,
      params: RequestParams = {},
    ) =>
      this.request<ResetPasswordCreateData, Error>({
        path: `/auth/reset-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name SendEmailConfirmationCreate
     * @summary Send confirmation email
     * @request POST:/auth/send-email-confirmation
     * @secure
     * @response `200` `SendEmailConfirmationCreateData` Returns email and boolean to confirm email was sent
     * @response `default` `Error` Error
     */
    sendEmailConfirmationCreate: (
      data: SendEmailConfirmationCreatePayload,
      params: RequestParams = {},
    ) =>
      this.request<SendEmailConfirmationCreateData, Error>({
        path: `/auth/send-email-confirmation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  usersPermissions = {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name PermissionsList
     * @summary Get default generated permissions
     * @request GET:/users-permissions/permissions
     * @secure
     * @response `200` `PermissionsListData` Returns the permissions tree
     * @response `default` `Error` Error
     */
    permissionsList: (params: RequestParams = {}) =>
      this.request<PermissionsListData, Error>({
        path: `/users-permissions/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesCreate
     * @summary Create a role
     * @request POST:/users-permissions/roles
     * @secure
     * @response `200` `RolesCreateData` Returns ok if the role was create
     * @response `default` `Error` Error
     */
    rolesCreate: (
      data: {
        description?: string;
        name?: string;
        permissions?: UsersPermissionsPermissionsTree;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RolesCreateData, Error>({
        path: `/users-permissions/roles`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDelete
     * @summary Delete a role
     * @request DELETE:/users-permissions/roles/{role}
     * @secure
     * @response `200` `RolesDeleteData` Returns ok if the role was delete
     * @response `default` `Error` Error
     */
    rolesDelete: (role: string, params: RequestParams = {}) =>
      this.request<RolesDeleteData, Error>({
        path: `/users-permissions/roles/${role}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDetail
     * @summary Get a role
     * @request GET:/users-permissions/roles/{id}
     * @secure
     * @response `200` `RolesDetailData` Returns the role
     * @response `default` `Error` Error
     */
    rolesDetail: (id: string, params: RequestParams = {}) =>
      this.request<RolesDetailData, Error>({
        path: `/users-permissions/roles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesList
     * @summary List roles
     * @request GET:/users-permissions/roles
     * @secure
     * @response `200` `RolesListData` Returns list of roles
     * @response `default` `Error` Error
     */
    rolesList: (params: RequestParams = {}) =>
      this.request<RolesListData, Error>({
        path: `/users-permissions/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesUpdate
     * @summary Update a role
     * @request PUT:/users-permissions/roles/{role}
     * @secure
     * @response `200` `RolesUpdateData` Returns ok if the role was udpated
     * @response `default` `Error` Error
     */
    rolesUpdate: (
      role: string,
      data: {
        description?: string;
        name?: string;
        permissions?: UsersPermissionsPermissionsTree;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RolesUpdateData, Error>({
        path: `/users-permissions/roles/${role}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name CountList
     * @summary Get user count
     * @request GET:/users/count
     * @secure
     * @response `200` `CountListData` Returns a number
     * @response `default` `Error` Error
     */
    countList: (params: RequestParams = {}) =>
      this.request<CountListData, Error>({
        path: `/users/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name GetUsers
     * @summary Get authenticated user info
     * @request GET:/users/me
     * @secure
     * @response `200` `GetUsersData` Returns user info
     * @response `default` `Error` Error
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<GetUsersData, Error>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersCreate
     * @summary Create a user
     * @request POST:/users
     * @secure
     * @response `201` `UsersCreateData` Returns created user info
     * @response `default` `Error` Error
     */
    usersCreate: (data: UsersCreatePayload, params: RequestParams = {}) =>
      this.request<UsersCreateData, Error>({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDelete
     * @summary Delete a user
     * @request DELETE:/users/{id}
     * @secure
     * @response `200` `UsersDeleteData` Returns deleted user info
     * @response `default` `Error` Error
     */
    usersDelete: (id: string, params: RequestParams = {}) =>
      this.request<UsersDeleteData, Error>({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDetail
     * @summary Get a user
     * @request GET:/users/{id}
     * @secure
     * @response `200` `UsersDetailData` Returns a user
     * @response `default` `Error` Error
     */
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.request<UsersDetailData, Error>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersList
     * @summary Get list of users
     * @request GET:/users
     * @secure
     * @response `200` `UsersListData` Returns an array of users
     * @response `default` `Error` Error
     */
    usersList: (params: RequestParams = {}) =>
      this.request<UsersListData, Error>({
        path: `/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersUpdate
     * @summary Update a user
     * @request PUT:/users/{id}
     * @secure
     * @response `200` `UsersUpdateData` Returns updated user info
     * @response `default` `Error` Error
     */
    usersUpdate: (
      id: string,
      data: UsersUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.request<UsersUpdateData, Error>({
        path: `/users/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
