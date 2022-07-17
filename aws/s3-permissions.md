# S3 Permissions

### Block public access (bucket settings)
Public access is granted to buckets and objects through
- access control lists (ACLs)
- bucket policies
- access point policies

---

### Object Ownership
Ownership of objects written from other AWS accounts

- ACLs disabled (recommended) - Access: specified **by only policies**; Owned by: this account;
- ACLs enabled - Access: can be specified **by ACL**; Owned by: can be another account;


| ACL      | Object Ownership       | Owned By                                                                    | Comments                                                                                       |
| -------- | ---------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| disabled | Bucket owner enforced  | Bucket owner                                                                | can't apply if any ACL exists                                                                  |
| enabled  | Bucket owner preferred | Bucket owner (if "bucket-owner-full-control" canned ACL) -or- Object writer | (if new objects only) Should specify this canned ACL is required, in Bucket Policy for uploads |
| enabled  | Object writer          | Object writer                                                               | default                                                                                        |


### Access control list (ACL)
Grant basic read/write permissions to other AWS accounts
