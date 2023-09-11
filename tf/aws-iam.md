**Create a Role / User / Group**
- `aws_iam_role` -> can have `inline_policy` doucment & `managed_policy_arns`
- `aws_iam_user`
- `aws_iam_group`

---

**Create a Inline Policy for a Role / User / Group**
- `aws_iam_role_policy` -> incompatible with using the `aws_iam_role` resource `inline_policy` argument
- `aws_iam_user_policy`
- `aws_iam_group_policy`

**Attach a Policy to Role / User / Group**
- `aws_iam_role_policy_attachment` -> incompatible with using the `aws_iam_role` resource `managed_policy_arns` argument
- `aws_iam_user_policy_attachment`
- `aws_iam_group_policy_attachment`

Note: do not enforce exclusive attachment

**Attach a Role / User / Group to Policy**
- `aws_iam_policy_attachment`

Note:
- creates exclusive attachments 
- conflicts with the `aws_iam_group_policy_attachment`, `aws_iam_role_policy_attachment`, and `aws_iam_user_policy_attachment`
- incompatible with using the `aws_iam_role` resource `managed_policy_arns` argument

---

**Add Users to the Group**
- `aws_iam_group_membership`

Note: exclusively manage the users in a group; conflict with itself if used more than once with the same group

**Add Groups to the User**
- `aws_iam_user_group_membership`

Note: non-exclusively manage the users in a group; can be used multiple times with the same user

