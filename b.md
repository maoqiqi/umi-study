
```
const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
```

```
<CodePreview> npm run ui</CodePreview>
```
```
@import '~antd/lib/style/themes/default.less';

.pre {
  margin: 12px 0;
  padding: 12px 20px;
  background: @input-bg;
  box-shadow: @card-shadow;
}
```

//// PageContainer import {PageContainer} from '@ant-design/pro-layout';
